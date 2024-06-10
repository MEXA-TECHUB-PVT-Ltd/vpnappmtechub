import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/src/redux/store';
import Home from './app/src/screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})