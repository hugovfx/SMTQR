import * as React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  infoContainer: {
    alignItems: 'center',
    padding:10,
    position:'absolute',
    alignSelf:'center',
    marginBottom:10,
    position:'absolute', 
    bottom:20,
  },
  scanText: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf:'center',
    marginBottom: 16,
    color:'white',
    fontWeight:'bold',
    position:'absolute', 
    bottom:20
  },
  semanal:{
    flex:1, 
    alignItems:'center',
    backgroundColor:'#E7E7E7',
    color:'red',
    paddingHorizontal:10,
    paddingTop: 20,
  },
  renglon: {
    backgroundColor: '#ECECDD',
    flex: 1,
    padding: 5,
    borderWidth:0
  },
  botonS:{
    flex:1,
    backgroundColor:'#A9A9A9',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:10,
  },
  botonNS:{
    flex:1/3,
    backgroundColor:'#C6C6C6',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:10,
  },
  textoS:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
  textoNS:{
    color:'black',
    fontSize:20,
  }
});

const styleButtons = StyleSheet.create({
    botonSelectTxt:{
      fontSize:20,
      fontWeight:'bold',
      color:'white',
    },
    botonSelectTxt2:{
      fontSize:30,
      fontWeight:'bold',
      color:'white',
    },
    botonL:{
      height: 50,
      borderWidth: 2,
      borderColor: '#77dd77',
      backgroundColor: '#424141',
      borderRadius:8,
      alignItems:'center',
      justifyContent:'center',
      padding:10
    },
    botonR:{
    alignItems:'center', 
    justifyContent:'center', 
    backgroundColor:'#424141', 
    width:50, 
    height:50, 
    position:'absolute', 
    top: 35, 
    right:10,
    borderRadius:50,
    borderWidth:2,
    borderColor:'#77dd77',
    paddingBottom:5,
  }
  });

export {styles, styleButtons};
