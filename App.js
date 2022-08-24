import React, {useState} from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){
  const [peso,setPeso] = useState('');
  const [altura,setAltura] = useState('')

  function handleSubmit(){
    const alt = altura/100;
    const imc = peso / (alt * alt);
    alert(imc);

    
  }


  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule Meu IMC</Text>

      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso (Kg)"
      keyboardType='numeric'
      />

    <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura) }
      placeholder="Altura (Cm)"
      keyboardType='numeric'
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 15,
    color: '#fff'
  },
  button:{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 15,
      backgroundColor: '#41Aef4',
      padding: 10
  },
  buttonText:{
    color:'#FFF',
    fontSize: 25
  }
});