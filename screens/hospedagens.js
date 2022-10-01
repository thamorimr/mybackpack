import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { WebView } from 'react-native-webview';

export default function Hospedagens({ route }) {

  let city = String(route.params?.city)
  let cityReplaced = city.replace(" ","-")

  return (
    <View style={styles.container}>
        <WebView
            source={{uri: 'https://www.airbnb.com.br/s/'+ cityReplaced}}
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
  }
});