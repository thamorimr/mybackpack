import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
// import {rotas} from '../data/rotas'
import { TouchableOpacity } from "react-native";


export default function Rotas({ navigation }) {

  const rotas=[
    {
    id:'01',
    desc:'Mirante',
    distance:'1'
    },
    {
    id:'02',
    desc:'Mirante 2',
    distance:'2'
    },
    {
    id:'03',
    desc:'Mirante 3',
    distance:'3'
    }
];

const pressHandler = () => {
  navigation.navigate('DetalhesRota');
}

function renderPost(item){
return(
  <View style={styles.card}>
    <TouchableOpacity onPress={pressHandler}>
      <Text style={styles.title}>
        {item.desc}
      </Text>
      <Text style={styles.titleDistance}>
        Distancia{'\n'}{item.distance} KM
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
      <FlatList
          data={rotas}
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
    fontSize: 17,
    color: 'white',
    fontWeight: '600'
  },
  titleDistance:{
    fontSize: 12,
    color: 'white',
    fontWeight: '600'
  }
});