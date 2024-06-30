import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LayoutMenu from '../(drawer)/_layout'

export default function App() {
  return (
    <NavigationContainer independent={true}>
      < LayoutMenu/>
    </NavigationContainer>
  );
}
