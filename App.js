import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Pressable } from 'react-native';
import { Scanner } from './components/Scanner';
import { Semanal } from './components/Semanal';
import { Quincenal } from './components/Quincenal';
import { Mensual } from './components/Mensual';
import { Calendario } from './components/calendario';
import { styles, styleButtons } from './components/styles';



export default function App() {
  const [pantalla, setPantalla] = useState(1);
  const cambiarPantalla1 = () => {
    setPantalla(1);
  };
  const cambiarPantalla2 = () => {
    setPantalla(2);
  };
  const cambiarPantalla3 = () => {
    setPantalla(3);
  };
  const cambiarPantalla4 = () => {
    setPantalla(4);
  };
  const cambiarPantalla5 = () => {
    setPantalla(5);
  };
  return (
    <View style={styles.container}>
      {pantalla==1 ? (<Scanner valor={<Pressable onPress={cambiarPantalla2} style={[styleButtons.botonL,{marginBottom:15}]}><Text style={styles.textoS}>Seleccionar</Text></Pressable>}/>
        ) : ( pantalla==2 ? (<Semanal valor={<View style={{flexDirection:'row', width:'106%', backgroundColor:'#C6C6C6'}}>
          <Pressable style={styles.botonNS} onPress={cambiarPantalla1}><Text style={styles.textoNS}>Sc</Text></Pressable>
          <Pressable style={styles.botonS} onPress={cambiarPantalla2}><Text style={styles.textoS}>Semanal</Text></Pressable>
          <Pressable style={styles.botonNS} onPress={cambiarPantalla3}><Text style={styles.textoNS}>Q</Text></Pressable>
          <Pressable style={styles.botonNS} onPress={cambiarPantalla4}><Text style={styles.textoNS}>M</Text></Pressable>
          <Pressable style={styles.botonNS} onPress={cambiarPantalla5}><Text style={styles.textoNS}>C</Text></Pressable>
          </View>} />
        ) : (pantalla==3 ? (<Quincenal valor={<View style={{flexDirection:'row', width:'106%', backgroundColor:'#C6C6C6'}}>
        <Pressable style={styles.botonNS} onPress={cambiarPantalla1}><Text style={styles.textoNS}>Sc</Text></Pressable>
        <Pressable style={styles.botonNS} onPress={cambiarPantalla2}><Text style={styles.textoNS}>S</Text></Pressable>
        <Pressable style={styles.botonS} onPress={cambiarPantalla3}><Text style={styles.textoS}>Quincenal</Text></Pressable>
        <Pressable style={styles.botonNS} onPress={cambiarPantalla4}><Text style={styles.textoNS}>M</Text></Pressable>
        <Pressable style={styles.botonNS} onPress={cambiarPantalla5}><Text style={styles.textoNS}>C</Text></Pressable>
        </View>}/>
          ) : ( pantalla==4 ? (<Mensual valor={<View style={{flexDirection:'row', width:'106%', backgroundColor:'#C6C6C6'}}>
          <Pressable style={styles.botonNS} onPress={cambiarPantalla1}><Text style={styles.textoNS}>Sc</Text></Pressable>
          <Pressable style={styles.botonNS} onPress={cambiarPantalla2}><Text style={styles.textoNS}>S</Text></Pressable>
          <Pressable style={styles.botonNS} onPress={cambiarPantalla3}><Text style={styles.textoNS}>Q</Text></Pressable>
          <Pressable style={styles.botonS} onPress={cambiarPantalla4}><Text style={styles.textoS}>Mensual</Text></Pressable>
          <Pressable style={styles.botonNS} onPress={cambiarPantalla5}><Text style={styles.textoNS}>C</Text></Pressable>
          </View>}/>
            ) : (pantalla==5 ? (<Calendario valor={<View style={{flexDirection:'row', width:'106%', backgroundColor:'#C6C6C6'}}>
            <Pressable style={styles.botonNS} onPress={cambiarPantalla1}><Text style={styles.textoNS}>Sc</Text></Pressable>
            <Pressable style={styles.botonNS} onPress={cambiarPantalla2}><Text style={styles.textoNS}>S</Text></Pressable>
            <Pressable style={styles.botonNS} onPress={cambiarPantalla3}><Text style={styles.textoNS}>Q</Text></Pressable>
            <Pressable style={styles.botonNS} onPress={cambiarPantalla4}><Text style={styles.textoNS}>M</Text></Pressable>
            <Pressable style={styles.botonS} onPress={cambiarPantalla5}><Text style={styles.textoS}>Calendario</Text></Pressable>
            </View>}/>
              ) : <Text>No se selecciono un menu valido</Text>))))}
    </View>
  );
}

