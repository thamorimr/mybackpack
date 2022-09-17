import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function DetalhesRota({ route }) {

  const navigation = useNavigation();
  const opcoes=[
    {
    id:'01',
    desc:'Atrações'
    },
    {
    id:'02',
    desc:'Restaurantes'
    },
    {
    id:'03',
    desc:'Hospedagens'
    },
    {
    id:'04',
    desc:'Locais a se evitar'
    }
];


const pressHandler = (opcao) => {
  if(opcao == '01'){
    navigation.navigate('Atracoes',{routeId: route.params?.routeId});
  };
  if(opcao == '02'){
    navigation.navigate('Restaurantes');
  }
}

function renderPost(item){
return(
  <View style={styles.card}>
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <Text style={styles.title}>
        {item.desc}
      </Text>
    </TouchableOpacity>
  </View>
)
};

  return (
    <View style={styles.container}>
      <ImageBackground  
        source={require('../assets/background/listagem_de_rotas.png')} 
        style={styles.image}>

        <Image 
          style={styles.mapa}
          source={require('../assets/mapaMiniatura.png')} />


        <FlatList
            data={opcoes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => renderPost(item)}
            />

      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  card:{
    padding: 40,
    backgroundColor: '#2b6e4c'
  },
  title:{
    fontSize: 25,
    color: 'white',
    fontWeight: '600'
  },
  mapa:{
    // resizeMode:'center',
    width: 400,
    height:170,
  }
});