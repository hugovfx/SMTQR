import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles, styleButtons } from './styles';
import { datos, maquinas } from './maquinas';



const Scanner = ({valor}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [information, setInformation] = useState(null);

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [sliderValue, setSliderValue] = useState(50);
  const viewWidth = `${sliderValue}%`;
  const viewHeight = `${sliderValue/2}%`;


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      if (status === 'granted') {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setInformation(data);
    datos[0].qrData = data;
  };

  const handleScanAgain = () => {
  setScanned(false);
  setInformation(null);
  datos[0].qrData = "nada";
};

  

  if (hasPermission === null) {
    return <Text>Solicitando permiso para acceder a la cámara...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No tienes permiso para acceder a la cámara.</Text>;
  }

  const maquina = maquinas.find((m) => m.id === datos[0].qrData*1);

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject,{borderWidth:2, borderColor:'#77dd77'}]}
      />
      {scanned ? (
        maquina ? (
        <View style={{flexDirection:'row', alignSelf:'center', position:'absolute', bottom:20, alignSelf:'center',}}> 
            {valor}
        </View>
        ):(
        <View style={styles.infoContainer}>
        <Pressable style={{alignItems:'center',borderWidth: 2, borderColor: '#77dd77', backgroundColor: '#424141', borderRadius:8, alignItems:'center', justifyContent:'center', padding:10}} onPress={handleScanAgain}>
        <Text style={styleButtons.botonSelectTxt}>QR no encontrado ↺</Text>
        </Pressable>
        </View>
        )
      ) : (
        <Text style={styles.scanText}>Escanea un código QR</Text>
      )}
      <Pressable style={{width:viewWidth, height:viewHeight, alignSelf:'center'}} onPress={toggleVisibility}>
        <View style={{position:'absolute', backgroundColor: isVisible ? 'red' : 'white', width:50, alignSelf:'center', borderWidth:1, borderColor:isVisible ? 'yellow' : 'white', top:0, left:0}}></View>
        <View style={{position:'absolute', backgroundColor:isVisible ? 'yellow' : 'white', height:50, borderWidth:1, borderColor:isVisible ? 'yellow' : 'white', top:0, left:0}}></View>
        <View style={{position:'absolute', backgroundColor:isVisible ? 'yellow' : 'white', width:50, alignSelf:'center', borderWidth:1, borderColor:isVisible ? 'yellow' : 'white', top:0, right:0}}></View>
        <View style={{position:'absolute', backgroundColor:isVisible ? 'yellow' : 'white', height:50, borderWidth:1, borderColor:isVisible ? 'yellow' : 'white', top:0, right:0}}></View>
        <View style={{position:'absolute', backgroundColor:isVisible ? 'yellow' : 'white', width:50, alignSelf:'center', borderWidth:1, borderColor:isVisible ? 'yellow' : 'white', bottom:0, right:0}}></View>
        <View style={{position:'absolute', backgroundColor:isVisible ? 'yellow' : 'white', height:50, borderWidth:1, borderColor:isVisible ? 'yellow' : 'white', bottom:0, right:0}}></View>
        <View style={{position:'absolute', backgroundColor:isVisible ? 'yellow' : 'white', width:50, alignSelf:'center', borderWidth:1, borderColor:isVisible ? 'yellow' : 'white', bottom:0, left:0}}></View>
        <View style={{position:'absolute', backgroundColor:isVisible ? 'yellow' : 'white', height:50, borderWidth:1, borderColor:isVisible ? 'yellow' : 'white', bottom:0, left:0}}></View>
      </Pressable>
        
      {isVisible && (
        <View style={{position:'absolute', bottom:100, alignSelf:'center'}}>
        <Slider
        style={{ width: 200, height: 40, alignSelf:'center' }}
        minimumValue={20}
        maximumValue={80}
        step={1}
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
        />
        </View>
      )}

      {scanned ? (
        maquina ? (
        <Pressable style={styleButtons.botonR} onPress={handleScanAgain}>
        <Text style={styleButtons.botonSelectTxt2}>↺</Text>
      </Pressable>
        ):(
        <View>
        </View>
        )
      ) : (
        <View></View>
      )}
    </View>
  );
}

export {Scanner};