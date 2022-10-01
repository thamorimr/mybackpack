import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';


export default function Atracoes({ route }) {

  const [go,setGo] = useState(false);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://192.168.1.7:3000/attraction/' + route.params?.routeId)
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });
  },[]);

  const pressHandlerNew = (id) => {
    navigation.navigate('CriarAtracao',{routeId: id});
  };

function renderPost(item){
return(
  <View style={styles.card}>
    <Text style={styles.title}>
    {item['Attraction.Name']}
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
              data={data}
              keyExtractor={(item) => String(item.attractionId)}
              renderItem={({item}) => renderPost(item)}/>

          <TouchableOpacity onPress={() => setGo(true)}>
              <Image
                style={styles.buttonTripadvisor}
                resizeMode="contain"
                source={require('../assets/button_tripadvisor.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => pressHandlerNew(route.params?.routeId)}>
            <Image
              style={styles.buttonPlus}
              resizeMode="contain"
              source={require('../assets/button_plus.png')} />
            </TouchableOpacity>

        </ImageBackground>
      </View>

    );
  }else {
    return(
        <WebView
              source={{uri: 'https://www.tripadvisor.com.br/Search?q=Santiago&searchSessionId=F3A78CDF5C913EE1575437F56915FF1E1664446199770ssid&searchNearby=false&sid=7DA5AD53B3B74A6E8C2B9C1911B7334A1664446203509&blockRedirect=true&ssrc=A&rf=1'}}
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
  },
  buttonPlus:{
    height: 80,
    width: 80,
    marginLeft: 290,
    marginBottom: 20
  }
});