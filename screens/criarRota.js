import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CriarRota({ route }) {

  return (
    <View style={styles.container}>
      <ImageBackground  
        source={require('../assets/background/listagem_de_rotas.png')} 
        style={styles.image}>
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
  },
  buttonPlus:{
    height: 80,
    width: 80,
    marginLeft: 290,
    marginBottom: 20
  }
});