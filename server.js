const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// Update this constant with the provided admin email
const ADMIN_EMAIL = 'pankajrathorep633@gmail.com';

// Middleware to verify admin token
const verifyAdminToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, 'your_admin_secret_key', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
    
    if (decoded.email !== ADMIN_EMAIL) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    req.userId = decoded.userId;
    next();
  });
};

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const database = client.db('career_compass');
        const users = database.collection('users');

        const user = await users.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

        // Log the user login
        await database.collection('user_logins').insertOne({
            userId: user._id,
            email: user.email,
            timestamp: new Date(),
        });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add this new endpoint
app.get('/api/user/login-history', async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'your_secret_key');
        const userId = decoded.userId;

        const database = client.db('career_compass');
        const userLogins = database.collection('user_logins');

        const loginHistory = await userLogins.find({ userId: new ObjectId(userId) })
            .sort({ timestamp: -1 })
            .limit(10)
            .toArray();

        res.status(200).json(loginHistory);
    } catch (error) {
        console.error('Error fetching login history:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add this new endpoint
app.get('/api/login-history', async (req, res) => {
    try {
        const database = client.db('career_compass');
        const userLogins = database.collection('user_logins');

        // Fetch the login history, sorted by timestamp in descending order
        const loginHistory = await userLogins.find().sort({ timestamp: -1 }).toArray();

        res.status(200).json(loginHistory);
    } catch (error) {
        console.error('Error fetching login history:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add a new admin login endpoint
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN_EMAIL) {
    return res.status(401).json({ message: 'Invalid admin credentials' });
  }

  try {
    const database = client.db('career_compass');
    const admins = database.collection('admins');

    const admin = await admins.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }

    const token = jwt.sign({ email: admin.email }, 'your_admin_secret_key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during admin login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add a new endpoint to get user login history (protected by admin authentication)
app.get('/api/admin/login-history', verifyAdminToken, async (req, res) => {
  try {
    const database = client.db('career_compass');
    const userLogins = database.collection('user_logins');

    const loginHistory = await userLogins.find().sort({ timestamp: -1 }).toArray();

    res.status(200).json(loginHistory);
  } catch (error) {
    console.error('Error fetching login history:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add this new endpoint
app.post('/api/analyze-quiz', async (req, res) => {
  const { quizResponses, userDescription } = req.body;

  try {
    // Simple logic to generate career suggestions based on quiz responses
    const careerSuggestions = generateCareerSuggestions(quizResponses);

    const careerAnalysis = `Based on your responses and description, you seem to have interests and skills that align well with the following career paths: ${careerSuggestions.join(', ')}. Consider exploring these options further to find a career that matches your passions and strengths.`;

    res.status(200).json({ careerAnalysis });
  } catch (error) {
    console.error('Error analyzing quiz responses:', error);
    res.status(500).json({ message: 'Error analyzing quiz responses' });
  }
});

// Add this function to generate career suggestions
function generateCareerSuggestions(quizResponses) {
  const careerOptions = [
    'Software Developer',
    'Data Analyst',
    'Marketing Specialist',
    'Financial Advisor',
    'Teacher',
    'Graphic Designer',
    'Human Resources Manager',
    'Environmental Scientist',
    'Healthcare Administrator',
    'Mechanical Engineer'
  ];

  // Simple logic: randomly select 3-5 career options
  const numSuggestions = Math.floor(Math.random() * 3) + 3; // 3 to 5 suggestions
  const suggestions = [];

  while (suggestions.length < numSuggestions) {
    const randomIndex = Math.floor(Math.random() * careerOptions.length);
    const suggestion = careerOptions[randomIndex];
    if (!suggestions.includes(suggestion)) {
      suggestions.push(suggestion);
    }
  }

  return suggestions;
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
