import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { WebView } from 'react-native-webview';


export default function Couchsurfing({ route }) {

  let city = String(route.params?.city)
  let cityReplaced = city.replace(" ","+")

  return (
    <View style={styles.container}>
        <WebView
            source={{uri: 'https://www.couchsurfing.com/place?search_type=place&search_query='+ cityReplaced}}
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