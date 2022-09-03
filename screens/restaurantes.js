import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { WebView } from 'react-native-webview';

export default function Restaurantes() {

  return (
    <View style={styles.container}>
        <WebView
            source={{uri: 'https://www.tripadvisor.com.br/Restaurants-g294305-Santiago_Santiago_Metropolitan_Region.html'}}
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