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

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name='Home' component={Home} 
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name='Rotas' component={Rotas} />
      <Stack.Screen name='LocaisEvitar' component={LocaisEvitar} />
      <Stack.Screen name='CriarLocaisEvitar' component={CriarLocaisEvitar} />
      <Stack.Screen name='Airbnb' component={Airbnb} />
      <Stack.Screen name='Couchsurfing' component={Couchsurfing} />
      <Stack.Screen name='Hospedagens' component={Hospedagens} />
      <Stack.Screen name='CriarRota' component={CriarRota} />
      <Stack.Screen name='CriarAtracao' component={CriarAtracao} />
      <Stack.Screen name='DetalhesRota' component={DetalhesRota} />
      <Stack.Screen name='Restaurantes' component={Restaurantes} />
      <Stack.Screen name='Atracoes' component={Atracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
