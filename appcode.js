// // /* eslint-disable react-native/no-inline-styles */

// // // import { ex_styles, external_Styles } from './style';
// // const Username:string = 'Alpesh';
// // let fruits = ()=>{
// //   return 'Apple';
// // };
// // let veg = ()=>{
// //   return 'Vegan';
// // };
// // let click = () => {
// //   console.warn('Button Pressed');
// // };
// const App = () => {
  // return(
    // <ScrollView>
/* //         {/* <Form/>
//         <MyClass/>
//         <Text_input/>
//         <Userdatas/>
//         <Btn2/>
//         <Props_inrn/>
//         <Boxes/>
//         <Flat_List/>
//         <List/>
//         <Grid/>
//         <Flat_grid/>
//         <Section/>
       <Used/>
        <Toggle/>
    </View>
     </ScrollView> */
    //  <Toggle/>

  // );
// };
// const Toggle = ()=>{
//   const [show,setShow] = useState(true);
//   return(
//     <View>
//       <Button title="Toggle Button"
//       onPress={()=>{setShow(!show);}}
//       />
//       {
//         show ? <Toggle_compo/> : null
//       };
//     </View>
//   );
// };
// const Toggle_compo = ()=>{
//   return(
//     <View>
//     <Text style={{fontSize:40,color:'red'}}>Toggle Component</Text>
//     </View>
//   );
// };
const Used = ()=>{
  const [count,setCount] = useState(0);
  const[data,setData] = useState(100);
  useEffect(()=>{
    console.warn(count);
  },[count]);
  useEffect(()=>{
    console.warn('do some api fetching',data);
  },[data]);
  return (
    <View>
      <Text style={{fontFamily:'cursive',fontSize:40}}>{data}:-This is the Used component: Count={count}</Text>
      <Button
       title="Update" onPress={()=>{setCount(count + 1);}} />
             <Button
       title="Update Data" onPress={()=>{setData(data + 1);}} />
       <User metadata={{data,count}}/>
    </View>
  );

};
const User = (props:{metadata:{count:number,data:number}})=>{
 useEffect(() =>{
  console.warn('data',props.metadata.data);
 },[props.metadata.data]);
 useEffect(() =>{
  console.warn('count',props.metadata.count);
 },[props.metadata.count]);
  return(
    <View>
      <Text>Count::{props.metadata.count}</Text>
      <Text>Data::{props.metadata.data}</Text>
    </View>
  );
};
interface MyClassState {
  name: string;
}
 class MyClass extends React.Component<{}, MyClassState>{

  constructor(props:{}) {
    super(props);
    this.state = {
      name: 'Alpesh',
    };
  }

  fruits = () => {
    return console.warn('Apple');
  };

  render() {
    return (
      <View>
        <Text style={{ fontSize: 40, color: 'red', textAlign: 'center' }}>{this.state.name}</Text>
        <Text style={{ fontSize: 40, color: 'red', textAlign: 'center' }}>Class Component In React</Text>
        <Button title="Press Me" onPress={this.fruits} />
      </View>
    );
  }
}
const Section = ()=>{
  const data = [
    { id: 1, name: 'Alice', data: ['JavaScript', 'Python', 'React'] },
    { id: 2, name: 'Bob', data: ['Java', 'C++', 'Kotlin'] },
    { id: 3, name: 'Charlie', data: ['Ruby', 'PHP', 'JavaScript'] },
    { id: 4, name: 'David', data: ['C#', 'Swift', 'Go'] },
    { id: 5, name: 'Eve', data: ['HTML', 'CSS', 'JavaScript'] },
    { id: 6, name: 'Frank', data: ['Rust', 'Scala', 'Haskell'] },
    { id: 7, name: 'Grace', data: ['Dart', 'Kotlin', 'Flutter'] },
    { id: 8, name: 'Hank', data: ['TypeScript', 'Node.js', 'Express'] },
    { id: 9, name: 'Ivy', data: ['Swift', 'Objective-C', 'React Native'] },
  ];
  return(
    <View>
      <Text style={{fontSize:40}}>Section List In React Native</Text>
      <SectionList
      sections = {data}
      renderItem={({item})=><Text>{item}</Text>}
      renderSectionHeader={({section:{name}})=>(
        <Text style={{color:'red',fontSize:20}}>{name}</Text>
      )}
       />
    </View>
  );
};
const Flat_grid = ()=>{
  const data = [
    { id: 1, Name: 'John', Email: 'john@example.com' },
    { id: 2, Name: 'Doe', Email: 'doe@example.com' },
    { id: 3, Name: 'Emily', Email: 'emily@example.com' },
    { id: 4, Name: 'Michael', Email: 'michael@example.com' },
    { id: 5, Name: 'Sarah', Email: 'sarah@example.com' },
    { id: 6, Name: 'Jessica', Email: 'jessica@example.com' },
    { id: 7, Name: 'David', Email: 'david@example.com' },
    { id: 8, Name: 'Laura', Email: 'laura@example.com' },
    { id: 9, Name: 'James', Email: 'james@example.com' },
];
  return(
    <View>
      <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 20 }}>Grids in Flat List</Text>
      <FlatList
        keyExtractor={(value)=>value.id.toString()}
        data={data}
        renderItem={({item})=> <Userdata item={item}/>}
        />
    </View>
  );
};
const flat_style = StyleSheet.create({
  box:{
    flexDirection:'row',
    borderWidth:2,
    borderColor:'yellow',
  },
  item:{
    fontSize:20,
    color:'cyan',
    flex:1,
    margin:2,
    padding:2,
    },
});
const Userdata = (props:{item:{Name:string,Email:string}})=>{
  const item = props.item;
  return(
    <View style={flat_style.box}>
          <Text style={flat_style.item}>{item.Name}</Text>
          <Text style={flat_style.item}>{item.Email}</Text>
        </View>
  );
};
const Grid = () => {
  const data = [
      { id: 1, Name: 'John' },
      { id: 2, Name: 'Doe' },
      { id: 3, Name: 'Emily' },
      { id: 4, Name: 'Michael' },
      { id: 5, Name: 'Sarah' },
      { id: 6, Name: 'Jessica' },
      { id: 7, Name: 'David' },
      { id: 8, Name: 'Laura' },
      { id: 9, Name: 'James' },
      { id: 10, Name: 'Alice' },
      { id: 11, Name: 'Robert' },
      { id: 12, Name: 'Sophia' },
      { id: 13, Name: 'Chris' },
      { id: 14, Name: 'Olivia' },
      { id: 15, Name: 'Daniel' },
      { id: 16, Name: 'Mia' },
      { id: 17, Name: 'Noah' },
      { id: 18, Name: 'Ava' },
      { id: 19, Name: 'Liam' },
      { id: 20, Name: 'Isabella' },
];
  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 20 }}>
        Grid In React Native
      </Text>
      <ScrollView>
      <View style={{display:'flex',flex:1,flexWrap:'wrap',flexDirection:'row'}}>
        {
          data.map((items)=><Text style={grid_styles.items}>{items.id}.{items.Name}</Text>)
        }
      </View>
      </ScrollView>
    </View>
  );
};
const grid_styles = StyleSheet.create({
  items:{
    backgroundColor:'red',
    margin:10,
    padding:10,
    color:'black',
    fontSize:20,
    width:100,
    height:100,
    textAlign:'center',
    textAlignVertical:'center',
  },
});

const List = ()=>{
  const Users = [
    {
      id:1,
      Name:'Alpesh',
    },
    {
      id:2,
      Name:'Sm Ydv',
    },
    {
      id:3,
      Name:'Mary',
    },
    {
      id:1,
      Name:'Alpesh',
    },
    {
      id:2,
      Name:'Sm Ydv',
    },
    {
      id:3,
      Name:'Mary',
    },
    {
      id:1,
      Name:'Alpesh',
    },
    {
      id:2,
      Name:'Sm Ydv',
    },
    {
      id:3,
      Name:'Mary',
    },
    {
      id:1,
      Name:'Alpesh',
    },
    {
      id:2,
      Name:'Sm Ydv',
    },
    {
      id:3,
      Name:'Mary',
    },
    {
      id:0,
      Name:'Michael',
    },
  ];
  return(
    <View>
      <Text style={{fontSize:40}}>List With Map Function</Text>
      <ScrollView>
      {
        Users.map((item)=><Text style={{fontSize:20,backgroundColor:'blue',margin:40,textAlign:'center'}}>{item.id}. {item.Name}</Text>)
      }
      </ScrollView>
    </View>
  );
};
const Flat_List = ()=>{
  const Users = [
    {
      id:1,
      Name:'Alpesh',
    },
    {
      id:2,
      Name:'Sm Ydv',
    },
    {
      id:3,
      Name:'Mary',
    },
  ];
  return (
      <View>
        <Text style={{fontSize:20 , textAlign:'center'}}>List with Flat List Component</Text>
        <FlatList
        data={Users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={{fontSize:20,backgroundColor:'blue',margin:10,textAlign:'center'}}>{item.id}. {item.Name}</Text>}/>
      </View>
  );
};

const Form = ()=>{
  const [display,setDisplay] = useState(false);
  let resetFormData = ()=>{
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  return(
    <View>
      <Text style={{fontSize:40,textAlign:'center'}}>Forms In R-N</Text>
      <TextInput
      placeholder="Enter User Name"
      style={ex_styles.place}
      value={name}
      onChangeText={(text)=>{setName(text);}}/>
      <TextInput
      placeholder="Enter User Email"
      style={ex_styles.place}
      value={email}
      onChangeText={(text)=>{setEmail(text);}}/>
      <TextInput
      placeholder="Enter User Password"
      style={ex_styles.place}
      value={password}
      secureTextEntry={true}
      onChangeText={(text)=>{setPassword(text);}}/>
      <Button title="See Password" />
      <View style={{marginBottom:10}}>
      <Button title="Print Details" onPress={()=>{setDisplay(true);}}/>
      </View>
      <Button title="Clear Details" onPress={resetFormData}/>
      <View>
        {
          display ? <View>
            <Text style={{fontSize:15}}>Your Name::{name}</Text>
            <Text style={{fontSize:15}}>Your Name::{email}</Text>
            <Text style={{fontSize:15}}>Your Name::{password}</Text>
          </View> : null
        }
      </View>
    </View>
  );
};
export default class MyClass1 extends React.Component {
  render()
  {
    return(
      <View>Hello Class</View>
    );
  };
};
const Text_input = ()=>{
  const [name,setName] = useState('');
  return(
    <View>
      <Text style={{fontSize:40}}>Handle Text Inputs In R-N</Text>
      <Text style={{fontSize:40,margin:5}}>Your Name Is::{name}</Text>
      <TextInput
      style={{borderWidth:3,borderRadius:5,borderColor:'red',fontSize:20,margin:10,padding:8}}
      placeholder="Enter Your Name"
     value={name}
      onChangeText={(text)=>{setName(text);}}/>
      <Button title="Clear Input" onPress={()=>{setName('');}} />
    </View>
  );
};
const Userdatas = () => {
  return(
    <View>
      <Text style={{fontSize:35}}>Components</Text>
      <Text style={{fontSize:20}}>Name:{Username}</Text>
      <Text style={{fontSize:20}}>Email:alpesh123@gmail.com</Text>
      <Text style={{fontSize:20}}>Password:1234556789</Text>
      <Btn/>
    </View>
  );
};
const Btn = ()=>{
  return(
    <View>
      <Text style={{fontSize:30}}>Button And Press Event</Text>
    <Button title="Press Me" color={'red'} onPress={()=>click()}/>
  </View>
  );
};
const Btn2 = ()=>{
    let [your_name,setName] = useState('TheCoditz');
    let changeName = ()=>{
      setName('Alpesh');
    };
  return(
    <View>
      <Text style={{fontSize:30}}>{your_name}</Text>
    <Button title="Update Name" color={'black'} onPress={changeName}/>
  </View>
  );
};
const Props_inrn = ()=>{
    const [f_name,setName] = useState('TheCoditz');
    let updated_name = ()=>{
      setName('Alpesh');
    };
    return(
        <View>
        <Text style={{fontSize:30}}>Props In React Native</Text>
        <Button title="Update Your Name" onPress={updated_name}/>
        <Inherit f_name={f_name} age={29}/>
    </View>
    );
};
const Inherit = (props:{f_name:string,age:number})=>{
    return(
        <View>
        <Text style={{fontSize:30,backgroundColor:'green'}}>{props.f_name},{props.age}</Text>
    </View>
    );
};
const Boxes = ()=>{
  return(
    <ScrollView>
      <View>
        <Text style={{ backgroundColor: 'maroon', fontSize: 30, padding: 10, textAlign: 'center' }}>Box1</Text>
        <Text style={external_Styles.textbox}>Box2</Text>
        <Text style={Styles.textbox}>Box3</Text>
        <Text style={Styles.textbox}>Box4</Text>
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  textbox:{
    backgroundColor:'aqua',
    padding:10,
    margin:10,
    color:'black',
    fontSize:30,
    textAlign:'center',
},
// });``` 
// export default App;
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
const App = () => {
  // const [show, setShow] = useState(true);
  return (
    <View style={{flex:1}}>
      {/* <Button
        title="Toggle Button"
        onPress={() => {
          setShow(!show);
        }}
      />
      {show ? <Student /> : null}
      <Response />
      <Button_style />
      <Radio /> */}
      {/* <Loader /> */}
      {/* <Check/> */}
    </View>
  );
};

const Loader = () => {
  const [load, setLoad] = useState(false);
  let loading = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  };
  return (
    <View>
      <ActivityIndicator size={'large'} color={'#00eeff'} animating={load} />
      <Button title="Press Me To Load" onPress={loading} />
    </View>
  );
};

const style3 = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Student = () => {
  useEffect(() => {
    let timer = setInterval(() => {
      console.warn('Timer Called');
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <View>
      <Text style={{ color: 'red', fontSize: 40, textAlign: 'center' }}>
        Toggle Component
      </Text>
    </View>
  );
};
const Response = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.child1}>
        <View style={styles.innerbox1} />
        <View style={styles.innerbox2} />
        <View style={styles.innerbox3} />
      </View>
      <View style={styles.child2} />
      <View style={styles.child3} />
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  child1: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  child2: {
    flex: 1,
    backgroundColor: 'green',
  },
  child3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  innerbox1: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 10,
  },
  innerbox2: {
    flex: 1,
    backgroundColor: 'maroon',
    margin: 10,
  },
  innerbox3: {
    flex: 1,
    backgroundColor: 'violet',
    margin: 10,
  },
});
let fruits = () => {
  console.warn('Apple');
};
const Button_style = () => {
  return (
    <TouchableHighlight onPress={fruits}>
      <Text style={style1.btn}>Button</Text>
    </TouchableHighlight>
  );
};
const style1 = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    margin: 10,
    borderRadius: 20,
    height: 40,
    textAlignVertical: 'center',
    shadowColor: 'purple',
    shadowOpacity: 1,
    elevation: 10,
  },
});
const Radio = () => {
  const skills = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'C++' },
    { id: 5, name: 'Ruby' },
    { id: 6, name: 'Kotlin' },
    { id: 7, name: 'Swift' },
    { id: 8, name: 'Go' },
    { id: 9, name: 'PHP' },
    { id: 10, name: 'TypeScript' },
  ];
  const [selectedRadio, setSelectedRadio] = useState(2);

  return (
    <View style={style2.main}>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={style2.wrapper}>
            <View style={style2.radio}>
              {selectedRadio === item.id && <View style={style2.radiobg} />}
            </View>
            <Text style={style2.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const style2 = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'violet',
  },
  radioText: {
    fontSize: 20,
    color: 'black',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center', // Center the content
    alignItems: 'center', // Center the content
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobg: {
    backgroundColor: 'black',
    height: 30,
    width: 30,
    borderRadius: 15,
    position: 'absolute', // Positioning it absolutely to center it
  },
});

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {View,Text, StyleSheet, Platform,TextInput, KeyboardAvoidingView, ActivityIndicator,ScrollView,Modal,StatusBar,Pressable,Button} from 'react-native';
import {Card, CheckBox,Divider,Slider,ListItem } from 'react-native-elements';
import {WebView} from 'react-native-webview';
const App = () => {
  return (

    <ScrollView>
      <View style={{flex:1}}>
      {/* <Dialogue />
      <Status/>
      <Btn_Events/>
      <Platform_Check/>
      <Web_View/>
      <Style_/>
      <Weather_App/>
      <Scroll_Flex/>*/}
      <Dialogue_Box/>
    </View>
    </ScrollView>
  );
};
const Dialogue_Box = () => {
  return (
    <View style={dialogue.container}>
      <Button title="Open Modal" />
    </View>
  );
};

const dialogue = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full height of the screen
    justifyContent: 'flex-end', // Aligns the button to the bottom
    padding: 10, // Optional: Add padding for better spacing from the screen edge
  },
});
// const Scroll_Flex = ()=>{
//   const foodItems = [
//     { id: 1, name: 'Apple', category: 'Fruit' },
//     { id: 2, name: 'Banana', category: 'Fruit' },
//     { id: 3, name: 'Carrot', category: 'Vegetable' },
//     { id: 4, name: 'Chicken', category: 'Meat' },
//     { id: 5, name: 'Rice', category: 'Grain' },
//     { id: 6, name: 'Broccoli', category: 'Vegetable' },
//     { id: 7, name: 'Salmon', category: 'Fish' },
//     { id: 8, name: 'Bread', category: 'Grain' },
//     { id: 9, name: 'Eggs', category: 'Dairy' },
//     { id: 10, name: 'Cheese', category: 'Dairy' },
//   ];
//   return(
//     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//     <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:260}}>
//       {
//         foodItems.map((items)=><Text style={flex.box}>{items.id}.{items.name}</Text>)
//       }
//     </View>
//     </ScrollView>
//   );
// };
// const flex = StyleSheet.create({
//   box:{
//     fontSize:30,
//     color:'black',
//     height:150,
//     width:150,
//     backgroundColor:'red',
//     margin:10,
//     textAlign:'center',
//     textAlignVertical:'center',
//     borderRadius:20,
//     marginHorizontal: 10,
//   },
// });
// const Weather_App = ()=>{
//   const[city,setCity] = useState('San Francisco');
//   const[loading,setLoading] = useState(false);
//   if (city === ''){
//     return setCity('San Francisco');
//   }
//   let typingTimeout;

//   const handleInputChange = (text:string) => {
//     setCity(text);  // Update city name

//     // Only set loading to true if it's not already true
//     if (!loading) {
//       setLoading(true); // Set loading to true when typing starts
//     }

//     // Clear previous timeout if the user is still typing
//     if (typingTimeout) {
//       clearTimeout(typingTimeout);
//     }

//     // Set a new timeout to detect when typing has stopped
//     typingTimeout = setTimeout(() => {
//       setLoading(false); // Turn off loading after 1 second of no typing
//     }, 1000);  // 1 second delay
//   };

//   return(
//     <View style={app.container}>
//     <KeyboardAvoidingView style={app.container} behavior="padding">
//       <Text style={[app.largetext]}>{city}</Text>
//       <Text style={app.smalltext}>Light Cloud</Text>
//       <Text style={app.smalltext}>24°</Text>
//       <TextInput
//       autoCorrect={false}
//       placeholder="Search any city"
//       placeholderTextColor="cyan"
//       style={app.textInput}
//       clearButtonMode="always"
//       onChangeText={handleInputChange}/>
//       {loading === false ?
//           <ActivityIndicator animating={false} size={'large'} color={'red'} /> : <ActivityIndicator animating={true} size={'large'} color={'red'} />
//       }
//       </KeyboardAvoidingView>
//       </View>
//   );
// };
// const app = StyleSheet.create({
//   container:{
//     backgroundColor: 'white',
//     flex:1,
//     justifyContent: 'center',
//     alignItems:'center',
//   },
//   smalltext:{
//     color:'black',
//     fontSize:18,
//     margin:3,
//     alignSelf:'center',
//     justifyContent: 'center',
//     alignItems:'center',
//   },
//   largetext:{
//     fontFamily:Platform.OS === 'ios' ? 'cursive' : 'normal',
//     fontSize:44,
//     color:'black',
//     margin:3,
//     alignSelf:'center',
//     justifyContent: 'center',
//     alignItems:'center',
//   },
//   textInput:{
//     backgroundColor:'black',
//     padding:10,
//     color:'white',
//     borderRadius:10,
//     width:250,
//     margin:20,
//   },
// });
// const Style_ = () => (
//   <View>
//     <Button
//     title="Click Me"
//     buttonStyle={{ backgroundColor: 'blue', borderRadius: 5 }}
//   />
//   <Card/>
//   <CheckBox/>
//   <Slider/>
//   <Divider/>
//   <ListItem/>
//   </View>
// );
// const Web_View = ()=>{
//   return(
//     <WebView source={{uri:'https://www.youtube.com/'}}/>
//   );
// };
// const Platform_Check = ()=>{
//   return(
//     <View>
//       <Text style={style2.osText}>Platform::{Platform.OS}</Text>
//       {
//         Platform.OS === 'android' ? <View style={{backgroundColor:'red',height:200,width:200}} />
//         :
//         <View style={{backgroundColor:'maroon',height:200,width:200}} />
//       }
//       <Text style={styleos.osText}>Hello</Text>
//     </View>
//   );
// };
// const styleos = StyleSheet.create({
//   osText:{
//     color:Platform.OS === 'android' ? 'coral' : 'black',
//     fontSize:30,
//   },
// });
// const Btn_Events = ()=>{
//   return(
//     <View style={style2.press}>
//       <Pressable
//       onPress={()=>{console.warn('Normal On Press');}}
//       onLongPress={()=>{console.warn('Long Press');}}
//       onPressIn={()=>{console.warn('Press In');}}
//       onPressOut={()=>{console.log('Press Out');}}
//       >
//         <Text style={style2.pressablebtn}>Pressable Button</Text>
//       </Pressable>
//     </View>
//   );
// };
// const style2 = StyleSheet.create({
//   press:{
//     flex:1,
//     justifyContent: 'center',
//   },
//   pressablebtn:{
//     backgroundColor:'blue',
//     padding:10,
//     margin:10,
//     borderRadius:10,
//     fontSize:20,
//     textAlign:'center',
//     shadowColor:'black',
//     elevation:5,
//   },
// });
// const Status = ()=>{
//   const[show,setShow] = useState(false);
//   const[change,setChange] = useState('light');
//   return (
//       <View>
//         <StatusBar backgroundColor={'red'} barStyle={change} hidden={show}/>
//         <View>
//           <Button title="Change Text Colour" onPress={()=>{setChange('dark-content')}}/>
//           <Button title="HIde Bar" onPress={()=>{setShow(!show);}}/>
//         </View>
//       </View>
//   );
// };
// const Dialogue = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <View style={style1.btn}>
//       <Modal transparent={true} visible={show} animationType="fade">
//         <View style={style1.center}>
//           <View style={style1.modal}>
//             <Text style={style1.modaltext}>Hello Dialogue Box</Text>
//             <Button
//               title="Close Modal"
//               onPress={() => {
//                 setShow(false);
//               }}
//             />
//           </View>
//         </View>
//       </Modal>
//       <Button
//         title="Open Modal"
//         onPress={() => {
//           setShow(true);
//         }}
//       />
//     </View>
//   );
// };
// const style1 = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
//   btn: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
//   modal: {
//     backgroundColor: 'cyan',
//     padding: 40,
//     borderRadius: 40,
//     elevation: 5,
//     shadowColor: 'black',
//   },
//   modaltext: {fontSize: 30, marginBottom: 20,color:'black'},
// });
export default App;
