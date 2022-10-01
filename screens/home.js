import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const navigation = useNavigation();

  const pressHandler = (id,name) => {
    navigation.navigate('Rotas', {citieId: id, city: name});
  }


  useEffect(() => {
    fetch('http://192.168.1.7:3000/cities')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      setOriginalData(json);
    });
  },[]);

  function renderPost(item){
    return(
      <View style={styles.card}>
        <Text 
          style={styles.title} 
          onPress={() => pressHandler(item.id,item.City)}
          numberOfLines={1}>
          {item.City} - {item.Country}
        </Text>
      </View>
    )
  };

  function selecionarItem(a){
    console.log(a);
    setData();
  };

  function search(s){
    let arr = JSON.parse(JSON.stringify(originalData));

    if(s === null || s === undefined || s === ''){
      setData()
    }
    else{
      setData(arr.filter((d) => d.City.includes(s)));
    }
  };


  return (
    <View style={styles.container}>
      <ImageBackground  
        source={require('../assets/background/busca_local.png')} 
        style={styles.image}>

        <Image 
          style={styles.logo}
          source={require('../assets/logo.png')} />

        
        <TextInput
          style={styles.input} 
          placeholder='Buscar Local' 
          onChangeText={(s) => search(s)}/>

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
  logo: {
    resizeMode:'center',
    width: 300,
    height:130,
    margin: 47
  },
  item: {
    backgroundColor: 'green',
    padding: 15,
    marginVertical: 1,
    marginHorizontal: 16
  },
  card:{
    borderColor: '#fcaf3b',
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    backgroundColor: '#ECEBEB'
  },
  title:{
    fontSize: 15,
    color: '#444',
    fontWeight: '600'
  },
  input: {
    borderColor: '#fcaf3b',
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 15,
    backgroundColor: 'white',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 80
  }
});