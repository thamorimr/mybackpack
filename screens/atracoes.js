import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
import { WebView } from 'react-native-webview';



export default function Atracoes() {

  const [url,setUrl] = useState('');
  const [go,setGo] = useState(false);

  const opcoes=[
    {
    id:'01',
    desc:'Mirante Cerro Santa Lúcia'
    },
    {
    id:'02',
    desc:'Cajon del Maipo'
    },
    {
    id:'03',
    desc:'Casa de la Moneda'
    },
    {
    id:'04',
    desc:'Valparaiso e Viña del Mar'
    }
];

function renderPost(item){
return(
  <View style={styles.card}>
    <Text style={styles.title}>
      {item.desc}
    </Text>
  </View>
)
};

  if (go == false){
    return (
      <View style={styles.container}>
          <ImageBackground  
            source={require('../assets/background/listagem_de_rotas.png')} 
            style={styles.image}>

            <FlatList
              data={opcoes}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => renderPost(item)}/>

            <TouchableOpacity onPress={() => setGo(true)}>
              <Image
                style={styles.buttonTripadvisor}
                resizeMode="contain"
                source={require('../assets/button_tripadvisor.png')} />
            </TouchableOpacity>

        </ImageBackground>
      </View>

    );
  }else {
    return(
        <WebView
              source={{uri: 'https://www.tripadvisor.com.br/Restaurants-g294305-Santiago_Santiago_Metropolitan_Region.html'}}
          />      
    )
  }
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
  buttonTripadvisor:{
    height: 80,
    width: 80,
    marginLeft: 290,
    marginBottom: 20
  }
});