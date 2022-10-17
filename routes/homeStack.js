import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Rotas from '../screens/rotas'
import DetalhesRota from '../screens/detalhesRota'
import Restaurantes from '../screens/restaurantes'
import Atracoes from '../screens/atracoes'
import CriarRota from '../screens/criarRota'
import CriarAtracao from '../screens/criarAtracao'
import Hospedagens from '../screens/hospedagens'
import LocaisEvitar from '../screens/locaisEvitar'
import CriarLocaisEvitar from '../screens/criarLocaisEvitar'
import Airbnb from '../screens/airbnb'
import Couchsurfing from '../screens/couchsurfing'
import DetalhesAtracao from '../screens/detalhesAtracao'

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
      <Stack.Group screenOptions={{ headerStyle: { backgroundColor: '#2b6e4c'} }}>
      <Stack.Screen name='Home' component={Home} 
        options={{
          headerShown: false
        }}/>
      <Stack.Screen name='Rotas' component={Rotas}/>
      <Stack.Screen name='DetalhesAtracao' component={DetalhesAtracao} 
        options={{
          headerShown: false
        }}/>
      <Stack.Screen name='LocaisEvitar' component={LocaisEvitar} 
        options={{
          title: 'Locais a se Evitar'
        }}/>
      <Stack.Screen name='CriarLocaisEvitar' component={CriarLocaisEvitar} 
        options={{
          headerShown: false
        }}/>
      <Stack.Screen name='Airbnb' component={Airbnb} 
        options={{
          headerShown: false
        }}/>
      <Stack.Screen name='Couchsurfing' component={Couchsurfing} 
        options={{
          headerShown: false
        }}/>
      <Stack.Screen name='Hospedagens' component={Hospedagens}/>
      <Stack.Screen name='CriarRota' component={CriarRota} 
        options={{
          headerShown: false
        }}/>
      <Stack.Screen name='CriarAtracao' component={CriarAtracao} 
        options={{
          headerShown: false
        }}/>
      <Stack.Screen name='DetalhesRota' component={DetalhesRota} 
        options={{
          title: 'Detalhes da Rota'
        }}/>
      <Stack.Screen name='Restaurantes' component={Restaurantes} 
        options={{
          headerShown: false
        }}/>
      <Stack.Screen name='Atracoes' component={Atracoes} 
        options={{
          title: 'Atrações'
        }}/>
      </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
