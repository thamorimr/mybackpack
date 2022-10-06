import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { WebView } from 'react-native-webview';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Hospedagens({ route }) {

  const navigation = useNavigation();

  const pressHandlerAirbnb = (cityId) => {
    navigation.navigate('Airbnb',{citieId: cityId, city: route.params?.city});
  }

  const pressHandlerCouch = (cityId) => {
    navigation.navigate('Couchsurfing',{citieId: cityId, city: route.params?.city});
  }

  return (
    <View style={styles.container}>
      <ImageBackground  
      source={require('../assets/background/listagem_de_rotas.png')} 
      style={styles.image}>

      <TouchableOpacity onPress={() => pressHandlerAirbnb(route.params?.citieId)}>
        <Image
          style={styles.button}
          // resizeMode="contain"
          source={require('../assets/button_airbnb.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => pressHandlerCouch(route.params?.citieId)}>
        <Image
          style={styles.button}
          // resizeMode="contain"
          source={require('../assets/button_couchsurfing.png')} />
      </TouchableOpacity>

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
  button:{
    height: 170,
    width: 330,
    margin: 75,
    alignSelf: 'center'
  }
});