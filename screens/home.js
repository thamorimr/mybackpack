import React from 'react';
import { ImageBackground,StyleSheet, View, Text, Image} from 'react-native';


export default function Home() {

  return (
    <View style={styles.container}>
      <ImageBackground  
        source={require('../assets/background/busca_local.png')} 
        style={styles.image}>

    <Image 
        style={styles.logo}
        source={require('../assets/logo.png')} />


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
  logo: {
    resizeMode:'center',
    width: 300,
    height:130,
    margin: 47
  }
});