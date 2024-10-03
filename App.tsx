import React, { useState } from 'react';
import {View,Button, StyleSheet,Text} from 'react-native';
const App = () => {
  return(
  <View>
    <Modal_Box/>
  </View>
  );
};
const Modal_Box = ()=>{
  const[load,setLoad] = useState(false);
  return(
    <View style={styles1.container}>
      {
        load ?
        <View style={styles1.modal}>
            <View style={styles1.box}>
              <Text style={styles1.text}>Dialogue Box</Text>
              <Button title="Close Modal" onPress={()=>{setLoad(false);}}/>
            </View>
          </View>
      :
      null
      }
      <Button title="Open Modal" onPress={() => { setLoad(true); } } />
    </View>
  );
};
const styles1 = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end',
  },
  modal:{
    flex:1,
    backgroundColor:'rgba(150,150,150,0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  box:{
    height:300,
    width:300,
    backgroundColor:'white',
    borderRadius:20,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems:'center',
  },
  text:{
    color:'black',
    fontSize:30,
    margin:5,
    },
});
export default App;
