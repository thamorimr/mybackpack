import { Text, View } from 'react-native'
import React from 'react'
import Home from './screens/home';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    Navigator()
  );
}