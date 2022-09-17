import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native";


export default function Rotas({ navigation }) {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch('http://192.168.1.14:3000/routes/'+'2')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });
  },[]);

  const pressHandler = () => {
    navigation.navigate('DetalhesRota');
  }

  function renderPost(item){
    return(
      <View style={styles.card}>
        <TouchableOpacity onPress={pressHandler}>
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
  }
});