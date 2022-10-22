import React, { useEffect, useState } from 'react';
import { ImageBackground,StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';


export default function CriarAtracao({ route }) {

  const [display, setDisplay]=useState('');
  const [name, setName]=useState(null);
  const [desc, setDesc]=useState(null);
  const [address, setAddress]=useState(null);
  const navigation = useNavigation();

  //Envio do formulário
  async function sendForm()
  {
    let response=await fetch('http://192.168.1.6:3000/create/attraction',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        Name: name,
        Desc: desc,
        Address: address,
        routeId: route.params?.routeId
      })
    });
    let json=await response.json();
    if(json != 'error'){
      setDisplay('Atração Cadastrada com Sucesso!');
      setTimeout(() => {
        setDisplay('');
        navigation.navigate('DetalhesRota',{routeId: route.params?.routeId,city: route.params?.city });
      }, 1000)
    }
  }


  return (
    <View style={styles.container}>
      <ImageBackground  
        source={require('../assets/background/listagem_de_rotas.png')} 
        style={styles.image}>

      
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Criar Nova Atração</Text>
        </View>

        <Text style={{alignSelf: 'center', color: 'white'}}>{display}</Text>

        <View style={styles.configCampo}>
          <Text style={styles.tituloCampo}>Nome</Text>
          <TextInput
            style={styles.campo}
            onChangeText={text => setName(text)}
          />
        </View>

        <View style={styles.configCampo}>
          <Text style={styles.tituloCampo}>Descrição</Text>
          <TextInput
            style={styles.campo}
            onChangeText={text => setDesc(text)}
          />
        </View>

        <View style={styles.configCampo}>
          <Text style={styles.tituloCampo}>Endereço</Text>
          <TextInput
            style={styles.campo}
            onChangeText={text => setAddress(text)}
          />
        </View>

        

      </ImageBackground>
      <Button title='Cadastrar' onPress={()=>sendForm()}/>
      
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
  },
  cabecalho:{
    backgroundColor: '#2b6e4c',
    height: 80
  },
  titulo:{
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 15
  },
  campo:{
    backgroundColor: '#2b6e4c',
    borderRadius: 7,
    height: 40,
    width: 350,
    alignSelf: 'center'
  },
  configCampo:{
    top: 50,
    marginTop: 35
  },
  tituloCampo:{
    color: 'white', 
    fontSize: 20,
    alignSelf: 'center'
  },
  cadastrar:{
    backgroundColor: 'white'
  }
});