const quizQuestions = [
  {
    question: "What subjects do you enjoy studying the most?",
    options: ["Math and Science", "Languages and Literature", "Creative Arts", "Social Studies and History"]
},
{
    question: "How do you prefer learning new things?",
    options: ["Through hands-on activities", "By reading and research", "Through discussions", "With visual and interactive tools"]
},
{
    question: "How would you describe your academic performance?",
    options: ["Top of the class", "Above average", "Average", "I struggle sometimes"]
},
{
    question: "What do you enjoy doing in your free time?",
    options: ["Exploring new technology", "Reading books", "Engaging in creative hobbies", "Playing sports or outdoor activities"]
},
{
    question: "How important is creativity in your ideal job?",
    options: ["Not important at all", "Somewhat important", "Moderately important", "Extremely important"]
},
{
    question: "Do you prefer working with data and numbers or with people?",
    options: ["Data and numbers", "People and communication", "A mix of both", "Neither"]
},
{
    question: "What type of tasks do you enjoy the most?",
    options: ["Solving complex problems", "Organizing and managing tasks", "Helping others", "Designing and creating things"]
},
{
    question: "How would you rate your study habits?",
    options: ["Very disciplined", "Somewhat consistent", "I study when needed", "I struggle to stay focused"]
},
{
    question: "How do you handle challenges or difficult problems?",
    options: ["I love challenges", "I seek help when needed", "I take my time to figure it out", "I tend to avoid difficult tasks"]
},
{
    question: "Are you interested in technology and innovation?",
    options: ["Highly interested", "Somewhat interested", "Neutral", "Not interested"]
},
{
    question: "How important is work-life balance for you in a career?",
    options: ["Not important", "Somewhat important", "Moderately important", "Very important"]
},
{
    question: "Do you enjoy working in teams or independently?",
    options: ["Independently", "In teams", "Both equally", "Depends on the task"]
},
{
    question: "How do you usually perform in exams or assessments?",
    options: ["I excel", "I do well with preparation", "I get by", "I struggle with exams"]
},
{
    question: "Are you interested in entrepreneurship or starting your own business?",
    options: ["Definitely", "Maybe in the future", "Not really", "I prefer stable jobs"]
},
{
    question: "Do you enjoy creative activities like writing, drawing, or designing?",
    options: ["I love it", "I do it sometimes", "Rarely", "Not interested"]
},
{
    question: "How do you feel about leadership roles?",
    options: ["I enjoy leading", "I prefer to follow", "I am neutral", "I avoid leadership roles"]
},
{
    question: "What motivates you more in a job?",
    options: ["Learning and growth", "Financial stability", "Helping others", "Creative freedom"]
},
{
    question: "How important is continuous learning and development in your career?",
    options: ["Very important", "Somewhat important", "Not a priority", "Depends on the job"]
},
{
    question: "Do you enjoy researching or learning new things outside of school/work?",
    options: ["I love it", "Only when necessary", "Occasionally", "Rarely"]
},
{
    question: "How do you manage your time for school/work and personal activities?",
    options: ["Very well", "Fairly balanced", "I struggle with time management", "I tend to procrastinate"]
}

];

const careers = [
    { title: "Software Developer", link: "https://en.wikipedia.org/wiki/Software_developer" },
    { title: "Teacher", link: "https://en.wikipedia.org/wiki/Teacher" },
    { title: "Nurse", link: "https://en.wikipedia.org/wiki/Nursing" },
    { title: "Data Scientist", link: "https://en.wikipedia.org/wiki/Data_science" },
    { title: "Graphic Designer", link: "https://en.wikipedia.org/wiki/Graphic_design" },
    { title: "Financial Analyst", link: "https://en.wikipedia.org/wiki/Financial_analyst" },
    { title: "Marketing Manager", link: "https://en.wikipedia.org/wiki/Marketing_management" },
    { title: "Mechanical Engineer", link: "https://en.wikipedia.org/wiki/Mechanical_engineering" },
    { title: "Psychologist", link: "https://en.wikipedia.org/wiki/Psychologist" },
    { title: "Chef", link: "https://en.wikipedia.org/wiki/Chef" },
    { title: "Architect", link: "https://en.wikipedia.org/wiki/Architect" },
    { title: "Entrepreneur", link: "https://en.wikipedia.org/wiki/Entrepreneurship" }
];

let currentQuestion = 0;
let userResponses = [];

function initQuiz() {
    const quizForm = document.getElementById('quiz-form');
    quizForm.innerHTML = ''; // Clear existing content
    displayQuestion();

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Quiz';
    submitButton.type = 'button';
    submitButton.style.display = 'none';
    submitButton.addEventListener('click', handleQuizSubmit);
    quizForm.appendChild(submitButton);

    // Remove the login button from here as it's now in the navigation
    updateProgress();
}

function displayQuestion() {
    const quizForm = document.getElementById('quiz-form');
    const question = quizQuestions[currentQuestion];
    
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `<p>${currentQuestion + 1}. ${question.question}</p>`;

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'option-button';
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, index));
        
        // Check if this option was previously selected
        if (question.selectedAnswer === index) {
            button.classList.add('selected');
        }
        
        optionsContainer.appendChild(button);
    });

    questionElement.appendChild(optionsContainer);

    const navigationButtons = document.createElement('div');
    navigationButtons.className = 'navigation-buttons';

    if (currentQuestion > 0) {
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.type = 'button';
        prevButton.addEventListener('click', previousQuestion);
        navigationButtons.appendChild(prevButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next';
    nextButton.type = 'button';
    nextButton.addEventListener('click', nextQuestion);
    navigationButtons.appendChild(nextButton);

    questionElement.appendChild(navigationButtons);

    quizForm.innerHTML = '';
    quizForm.appendChild(questionElement);
}

function selectOption(selectedButton, index) {
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => button.classList.remove('selected'));
    selectedButton.classList.add('selected');
    
    // Store the selected answer
    quizQuestions[currentQuestion].selectedAnswer = index;
}

function nextQuestion() {
    if (!quizQuestions[currentQuestion].hasOwnProperty('selectedAnswer')) {
        alert('Please select an answer before proceeding.');
        return;
    }

    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        handleQuizSubmit();
    }
    updateProgress();
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        updateProgress();
    }
}

function updateProgress() {
    const progress = document.querySelector('.progress');
    const progressPercentage = ((currentQuestion + 1) / quizQuestions.length) * 100;
    progress.style.width = `${progressPercentage}%`;
}

function handleQuizSubmit() {
    const quizForm = document.getElementById('quiz-form');
    quizForm.innerHTML = ''; // Clear existing content

    const textareaContainer = document.createElement('div');
    textareaContainer.className = 'textarea-container';

    const textField = document.createElement('textarea');
    textField.id = 'user-description';
    textField.placeholder = ' ';
    textField.rows = 5;

    const label = document.createElement('label');
    label.className = 'textarea-label';
    label.htmlFor = 'user-description';
    label.textContent = 'Tell us a bit more about yourself...';

    textareaContainer.appendChild(textField);
    textareaContainer.appendChild(label);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Generate Career Suggestions';
    submitButton.type = 'button';
    submitButton.addEventListener('click', () => {
        // Create and display the loading message
        const loadingMessage = document.createElement('div');
        loadingMessage.className = 'loading-indicator';
        loadingMessage.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing your responses...';
        quizForm.innerHTML = ''; // Clear existing content
        quizForm.appendChild(loadingMessage);

        // Simulate analysis time and then generate personalized response
        setTimeout(() => {
            const userDescription = textField.value;
            generatePersonalizedResponse(userDescription);
        }, 3000); // 3 seconds delay
    });

    quizForm.appendChild(textareaContainer);
    quizForm.appendChild(submitButton);

    // Animate the textarea and button
    gsap.from(textareaContainer, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out'
    });

    gsap.from(submitButton, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
        delay: 0.2
    });
}

function generatePersonalizedResponse(userDescription) {
    displayCareerOptions(userDescription);
}

function displayCareerOptions(userDescription) {
    const resultsSection = document.getElementById('results');
    const suggestionsContainer = document.getElementById('career-suggestions');
    suggestionsContainer.innerHTML = '';

    // Randomly select 3 careers
    const selectedCareers = shuffleArray(careers).slice(0, 3);

    selectedCareers.forEach(career => {
        const careerBox = document.createElement('div');
        careerBox.className = 'career-box';
        careerBox.innerHTML = `
            <h3>${career.title}</h3>
            <p>${generatePersonalizedComment(career.title, userDescription)}</p>
            <a href="${career.link}" target="_blank">Learn More</a>
        `;
        suggestionsContainer.appendChild(careerBox);
    });

    resultsSection.style.display = 'block';
    animateCareerBoxes();

    document.getElementById('quiz').style.display = 'none';

    // Add Retake Quiz button
    const retakeButton = document.createElement('button');
    retakeButton.textContent = 'Retake Quiz';
    retakeButton.className = 'retake-button';
    retakeButton.addEventListener('click', retakeQuiz);
    resultsSection.appendChild(retakeButton);
}

function retakeQuiz() {
    // Reset quiz state
    currentQuestion = 0;
    userResponses = [];
    quizQuestions.forEach(question => delete question.selectedAnswer);

    // Hide results and show quiz
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';

    // Reinitialize the quiz
    initQuiz();

    // Scroll to the quiz section
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}

function generatePersonalizedComment(careerTitle, userDescription) {
    const comments = [
        `Based on your interests, ${careerTitle} could be a great fit for you!`,
        `Your skills align well with the requirements for a ${careerTitle}.`,
        `Given your background, you might find ${careerTitle} to be a rewarding career path.`,
        `Your unique perspective could bring valuable insights to the field of ${careerTitle}.`,
        `The ${careerTitle} field offers opportunities that match your aspirations.`
    ];
    return comments[Math.floor(Math.random() * comments.length)];
}

// Add this new function to shuffle the careers array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function animateCareerBoxes() {
    gsap.from('.career-box', {
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: 'power2.out',
        onComplete: addHoverAnimation
    });
}

function addHoverAnimation() {
    gsap.utils.toArray('.career-box').forEach(box => {
        box.addEventListener('mouseenter', () => {
            gsap.to(box, { scale: 1.05, duration: 0.3, ease: 'power1.out' });
        });
        box.addEventListener('mouseleave', () => {
            gsap.to(box, { scale: 1, duration: 0.3, ease: 'power1.out' });
        });
    });
}

function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    const menuToggle = document.querySelector('.menu-toggle');
    navUl.classList.toggle('active');
    
    if (navUl.classList.contains('active')) {
        menuToggle.innerHTML = '&times;'; // Change to a cross
        menuToggle.classList.add('active');
    } else {
        menuToggle.innerHTML = '☰'; // Change back to hamburger
        menuToggle.classList.remove('active');
    }
}

function startJourney() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
    
    document.getElementById('quiz').style.display = 'block';
    initQuiz();
}

function addSkillsAssessment() {
    const skillsSection = document.createElement('section');
    skillsSection.id = 'skills-assessment';
    skillsSection.innerHTML = `
        <h2>Skills Assessment</h2>
        <p>Rate your proficiency in the following skills:</p>
        <div id="skills-list"></div>
        <button id="analyze-skills">Analyze Skills</button>
    `;
    document.body.insertBefore(skillsSection, document.getElementById('resources'));

    const skills = ['Communication', 'Problem Solving', 'Teamwork', 'Leadership', 'Technical Skills'];
    const skillsList = document.getElementById('skills-list');

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.innerHTML = `
            <label>${skill}</label>
            <input type="range" min="1" max="5" value="3" class="skill-slider" data-skill="${skill}">
        `;
        skillsList.appendChild(skillItem);
    });

    document.getElementById('analyze-skills').addEventListener('click', analyzeSkills);
}

function analyzeSkills() {
    const skillRatings = {};
    document.querySelectorAll('.skill-slider').forEach(slider => {
        skillRatings[slider.dataset.skill] = slider.value;
    });

    // Here you would typically send this data to a server for analysis
    console.log('Skill ratings:', skillRatings);
    alert('Skills analyzed! Check the console for results.');
}

function addCareerRoadmap() {
    const roadmapSection = document.createElement('section');
    roadmapSection.id = 'career-roadmap';
    roadmapSection.innerHTML = `
        <h2>Career Roadmap</h2>
        <div id="roadmap-container"></div>
    `;
    document.body.insertBefore(roadmapSection, document.getElementById('resources'));

    const roadmapSteps = [
        { title: 'Education', description: 'Complete relevant degree or certification' },
        { title: 'Entry-Level Position', description: 'Gain initial work experience' },
        { title: 'Skill Development', description: 'Continuous learning and improvement' },
        { title: 'Mid-Level Position', description: 'Take on more responsibilities' },
        { title: 'Leadership Role', description: 'Manage teams and projects' }
    ];

    const roadmapContainer = document.getElementById('roadmap-container');
    roadmapSteps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'roadmap-step';
        stepElement.innerHTML = `
            <h3>${index + 1}. ${step.title}</h3>
            <p>${step.description}</p>
        `;
        roadmapContainer.appendChild(stepElement);
    });
}

function addMentorshipProgram() {
    const mentorshipSection = document.createElement('section');
    mentorshipSection.id = 'mentorship';
    mentorshipSection.innerHTML = `
        <h2>Mentorship Program</h2>
        <p>Connect with industry professionals for guidance and advice.</p>
        <form id="mentorship-form">
            <input type="text" id="mentor-name" placeholder="Your Name" required>
            <input type="email" id="mentor-email" placeholder="Your Email" required>
            <select id="mentor-field">
                <option value="">Select a Field</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
            </select>
            <button type="submit">Request a Mentor</button>
        </form>
    `;
    document.body.insertBefore(mentorshipSection, document.getElementById('resources'));

    document.getElementById('mentorship-form').addEventListener('submit', handleMentorshipRequest);
}

function handleMentorshipRequest(event) {
    event.preventDefault();
    const name = document.getElementById('mentor-name').value;
    const email = document.getElementById('mentor-email').value;
    const field = document.getElementById('mentor-field').value;

    // Here you would typically send this data to a server
    console.log('Mentorship request:', { name, email, field });
    alert('Mentorship request submitted! We\'ll be in touch soon.');
}

function createUserProfile() {
    const profileSection = document.createElement('section');
    profileSection.id = 'user-profile';
    profileSection.innerHTML = `
        <h2>Your Profile</h2>
        <div id="profile-info"></div>
        <button id="update-profile">Update Profile</button>
    `;
    document.body.insertBefore(profileSection, document.getElementById('quiz'));

    // Add functionality to update and display user profile
    document.getElementById('update-profile').addEventListener('click', updateProfile);
}

function updateProfile() {
    // Implement profile update logic
}

function addCareerExplorationTools() {
    const explorationSection = document.createElement('section');
    explorationSection.id = 'career-exploration';
    explorationSection.innerHTML = `
        <h2>Career Exploration Tools</h2>
        <div id="job-market-trends"></div>
        <div id="salary-calculator"></div>
    `;
    document.body.insertBefore(explorationSection, document.getElementById('resources'));

    // Implement job market trends and salary calculator functionality
}

function addInteractiveLearning() {
    const learningSection = document.createElement('section');
    learningSection.id = 'interactive-learning';
    learningSection.innerHTML = `
        <h2>Interactive Learning</h2>
        <div id="video-tutorials"></div>
        <div id="quizzes"></div>
    `;
    document.body.insertBefore(learningSection, document.getElementById('resources'));

    // Implement video tutorials and interactive quizzes
}

function addCommunityForum() {
    const forumSection = document.createElement('section');
    forumSection.id = 'community-forum';
    forumSection.innerHTML = `
        <h2>Community Forum</h2>
        <div id="forum-topics"></div>
        <button id="create-topic">Create New Topic</button>
    `;
    document.body.insertBefore(forumSection, document.getElementById('contact'));

    // Implement forum functionality
    document.getElementById('create-topic').addEventListener('click', createNewTopic);
}

function createNewTopic() {
    // Implement new topic creation logic
}

function implementRecommendationsEngine() {
    // This would typically involve machine learning algorithms
    // For demonstration, we'll use a simple recommendation system
    const userInterests = getUserInterests();
    const recommendations = generateRecommendations(userInterests);
    displayRecommendations(recommendations);
}

function getUserInterests() {
    // Collect user interests from various interactions
    return ['technology', 'data science', 'web development'];
}

function generateRecommendations(interests) {
    // Generate recommendations based on interests
    // This is a simplified version
    const allRecommendations = {
        'technology': ['Software Engineer', 'IT Consultant'],
        'data science': ['Data Analyst', 'Machine Learning Engineer'],
        'web development': ['Front-end Developer', 'Full-stack Developer']
    };
    
    return interests.flatMap(interest => allRecommendations[interest] || []);
}

function displayRecommendations(recommendations) {
    const recSection = document.createElement('section');
    recSection.id = 'personalized-recommendations';
    recSection.innerHTML = `
        <h2>Personalized Recommendations</h2>
        <ul>
            ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    `;
    document.body.insertBefore(recSection, document.getElementById('resources'));
}

function improveAccessibility() {
    // Add ARIA labels to important elements
    document.querySelectorAll('button').forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent);
        }
    });

    // Improve keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

function handleKeyboardNavigation(event) {
    // Implement keyboard navigation logic
}

function handleLogin(provider) {
    // Simulate login process
    console.log(`Logging in with ${provider}`);
    
    // Show loading indicator
    const loginButton = document.querySelector(`.${provider.toLowerCase()}-login`);
    const originalText = loginButton.innerHTML;
    loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    loginButton.disabled = true;

    // Simulate API call delay
    setTimeout(() => {
        // Update UI to show logged-in state
        document.querySelector('.logo .login').textContent = 'Logged In';
        document.querySelector('.logo .login').style.backgroundColor = 'var(--secondary-color)';
        
        // Hide login options
        document.querySelector('.login-options').style.display = 'none';

        // Show success message
        alert(`Successfully logged in with ${provider}!`);

        // Reset button state
        loginButton.innerHTML = originalText;
        loginButton.disabled = false;
    }, 2000); // 2 second delay to simulate API call
}

function addLoginButtons() {
    const loginOptions = document.createElement('div');
    loginOptions.className = 'login-options';
    
    const googleLogin = document.createElement('button');
    googleLogin.className = 'login-button google-login';
    googleLogin.innerHTML = '<i class="fab fa-google"></i> Login with Google';
    googleLogin.addEventListener('click', () => handleLogin('Google'));
    
    const facebookLogin = document.createElement('button');
    facebookLogin.className = 'login-button facebook-login';
    facebookLogin.innerHTML = '<i class="fab fa-facebook-f"></i> Login with Facebook';
    facebookLogin.addEventListener('click', () => handleLogin('Facebook'));
    
    loginOptions.appendChild(googleLogin);
    loginOptions.appendChild(facebookLogin);
    
    // Add login options to the form
    const form = document.querySelector('form');
    form.appendChild(loginOptions);
}

// Add this function to fetch and display login history
function fetchLoginHistory() {
    fetch('/api/login-history')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#login-history-table tbody');
            tableBody.innerHTML = '';
            data.forEach(login => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${login.email}</td>
                    <td>${new Date(login.timestamp).toLocaleString()}</td>
                `;
                tableBody.appendChild(row);
            });
            document.getElementById('login-history').style.display = 'block';
        })
        .catch(error => console.error('Error fetching login history:', error));
}

// Call this function after successful login
function onSuccessfulLogin() {
    // ... (existing code)
    fetchLoginHistory();
}

document.addEventListener('DOMContentLoaded', () => {
    // Hide quiz section initially
    document.getElementById('quiz').style.display = 'none';

    // Add event listener to "Start Your Journey" button
    document.querySelector('.cta-button').addEventListener('click', startJourney);

    // Add menu toggle functionality
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.addEventListener('click', toggleMenu);

    const nav = document.querySelector('nav');
    nav.insertBefore(menuToggle, nav.firstChild);

    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            toggleMenu(); // Close the menu after clicking a link
        });
    });

    // Animate header on page load
    gsap.from('header', { duration: 1, y: -50, opacity: 0, ease: 'power3.out' });

    // Update progress bar when user interacts with form inputs
    document.getElementById('quiz-form').addEventListener('input', updateProgress);

    // Add this new CSS rule for the career boxes layout
    const style = document.createElement('style');
    style.textContent = `
        #career-suggestions {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .career-box {
            flex-basis: calc(33.33% - 20px);
            margin-bottom: 20px;
        }
        @media (max-width: 768px) {
            .career-box {
                flex-basis: 100%;
            }
        }
        .loading-indicator {
            text-align: center;
            font-size: 1.2em;
            margin-top: 20px;
        }
    `;
    document.head.appendChild(style);

    // Call this function in your DOMContentLoaded event listener
    addSkillsAssessment();
    addCareerRoadmap();
    addMentorshipProgram();
    createUserProfile();
    addCareerExplorationTools();
    addInteractiveLearning();
    addCommunityForum();
    implementRecommendationsEngine();
    improveAccessibility();

    addLoginButtons();
});

// Add these functions to your existing script.js file

const adminLoginForm = document.getElementById('admin-login-form');
const loginHistorySection = document.getElementById('login-history');
const loginHistoryTable = document.getElementById('login-history-table');

adminLoginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;

  try {
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('adminToken', token);
      fetchLoginHistory();
    } else {
      alert('Admin login failed. Please check your credentials.');
    }
  } catch (error) {
    console.error('Error during admin login:', error);
    alert('An error occurred during admin login.');
  }
});

async function fetchLoginHistory() {
  const adminToken = localStorage.getItem('adminToken');
  if (!adminToken) {
    alert('Please log in as an admin to view login history.');
    return;
  }

  try {
    const response = await fetch('/api/admin/login-history', {
      headers: {
        'Authorization': adminToken,
      },
    });

    if (response.ok) {
      const loginHistory = await response.json();
      displayLoginHistory(loginHistory);
    } else {
      alert('Failed to fetch login history. Please try logging in again.');
    }
  } catch (error) {
    console.error('Error fetching login history:', error);
    alert('An error occurred while fetching login history.');
  }
}

function displayLoginHistory(loginHistory) {
  const tableBody = loginHistoryTable.querySelector('tbody');
  tableBody.innerHTML = '';

  loginHistory.forEach((login) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${login.email}</td>
      <td>${new Date(login.timestamp).toLocaleString()}</td>
    `;
    tableBody.appendChild(row);
  });

  loginHistorySection.style.display = 'block';
}

// Add a function to show the admin login form
function showAdminLogin() {
  document.getElementById('admin-login').style.display = 'block';
}

// Call this function when you want to display the admin login form
// For example, you could add a button or link in your HTML to trigger this:
// <button onclick="showAdminLogin()">Admin Login</button>

