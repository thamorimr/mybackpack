import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { WebView } from 'react-native-webview';

export default function DetalhesAtracao({ route }) {

  return (
    <View style={styles.container}>
        <WebView
            source={{uri: 'https://www.google.com/search?q=' + route.params?.attractionName + ' ' + route.params?.city + '&tbm=isch'}}
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