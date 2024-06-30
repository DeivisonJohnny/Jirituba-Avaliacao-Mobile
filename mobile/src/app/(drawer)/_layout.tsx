import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../(drawer)/home'
import Avaliacao from '../(drawer)/avaliacao'

const Drawer = createDrawerNavigator();

const LayoutMenu = () => {

  return (
    <Drawer.Navigator screenOptions={{drawerPosition: 'right'}}>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Avaliações' component={Avaliacao} />
    </Drawer.Navigator>
  )

}



const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: 'red',
    width: '100%'
  }
});
export default LayoutMenu;