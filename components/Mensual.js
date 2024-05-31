import {React, useState} from 'react';
import { Text, View, StyleSheet, Pressable, FlatList } from 'react-native';
import { datos, maquinas } from './maquinas';
import { styles } from './styles';

const Paso = ({subTitle,}) => {
  const [bandera, setBandera] = useState(false);
  return (
    <View style={styles.renglon}>
      <View style={{flex:1, padding:10}}>
      <Text style={{textAlign: 'justify', fontSize:14}}>{subTitle}</Text>
      </View>

      <View style={[styles.centrar,{}]}>
        <Pressable style={{backgroundColor: bandera ? 'green' : 'grey', alignItems:'center', alignSelf:'center', padding: 8, borderRadius: 4, marginTop:4, width:'90%'}} onPress={() => {setBandera(!bandera);}}>
          <Text style={{color:'white', fontSize:20 }}>{bandera ? ' Realizado' : ' Por hacer'}</Text>
        </Pressable>
      </View>
    </View>
  );
};


const Mensual = ({valor}) => {
  const maquina = maquinas.find((m) => m.id === datos[0].qrData*1);

  if (!maquina) {
    return <Text>Máquina no encontrada</Text>;
  }


  const [maquinaInfo, setMaquinaInfo] = useState(maquina.mensual);
  const [subTitle, setSubTitle] = useState('minino');
  const [menuView, setMenuView] = useState(false);
  return (
    <View style={styles.semanal}>
      <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold'}}>{maquina.nombre}</Text>
      <Text style={{textAlign: 'justify', fontWeight:'bold'}}>Mensual:</Text>
       <FlatList
        data={maquinaInfo}
        renderItem={({ item }) => (
          <Paso
            subTitle={item.subTitle}
            data={maquinaInfo}
            setData={setMaquinaInfo}
          />
        )}
      />
      {valor}
</View>
  );
}


export { Mensual };
