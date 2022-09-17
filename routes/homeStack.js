import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Rotas from '../screens/rotas'
import DetalhesRota from '../screens/detalhesRota'
import Restaurantes from '../screens/restaurantes'
import Atracoes from '../screens/atracoes'

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
      <Stack.Screen name='DetalhesRota' component={DetalhesRota} />
      <Stack.Screen name='Restaurantes' component={Restaurantes} />
      <Stack.Screen name='Atracoes' component={Atracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
