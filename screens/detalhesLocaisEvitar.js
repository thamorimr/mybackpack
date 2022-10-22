import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { WebView } from 'react-native-webview';


export default function DetalhesLocaisEvitar({ route }) {

  let city = String(route.params?.city)
  let cityReplaced = city.replace(" ","+")
  let address = String(route.params?.address)
  let addressReplaced = address.replace(" ","+")

  return (
    <View style={styles.container}>
        <WebView
            source={{uri: 'https://www.google.com/maps?q='+ addressReplaced + '+' + cityReplaced}}
        />
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