import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Rotas({ route }) {

  const [data, setData] = useState([]);
  const navigation = useNavigation();
  

  useEffect(() => {
    fetch('http://192.168.1.6:3000/routes/' + route.params?.citieId)
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });
  },[]);

  const pressHandlerDet = (id) => {
    navigation.navigate('DetalhesRota',{routeId: id, city: route.params?.city});
  };

  const pressHandlerNew = (id) => {
    navigation.navigate('CriarRota',{citieId: id, city: route.params?.city});
  }

  function renderPost(item){
    return(
      <View style={styles.card}>
        <TouchableOpacity onPress={() => pressHandlerDet(item.id)}>
          <Text style={styles.title}>
            {item.DescRoute}
          </Text>
          <Text style={styles.titleDistance}>
            Distancia{'\n'}{item.Distance} KM
          </Text>
        </TouchableOpacity>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <ImageBackground  
        source={require('../assets/background/listagem_de_rotas.png')} 
        style={styles.image}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => renderPost(item)}
      />

      <TouchableOpacity onPress={() => pressHandlerNew(route.params?.citieId)}>
        <Image
          style={styles.buttonPlus}
          resizeMode="contain"
          source={require('../assets/button_plus.png')} />
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