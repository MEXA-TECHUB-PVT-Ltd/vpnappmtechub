import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Splash from './app/src/screens/Splash/Splash';
import Agreement from './app/src/screens/Agreement/Agreement';
import PrivacyPolicy from './app/src/screens/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './app/src/screens/TermsConditions/TermsConditions';
import SelectLanguage from './app/src/screens/SelectLanguage/SelectLanguage';
import Loading from './app/src/screens/Loading/Loading';
import Home from './app/src/screens/Home/Home';
import Countries from './app/src/screens/Countries/Countries';
import Notifications from './app/src/screens/Notifications/Notifications';
import Images from './app/src/consts/Images';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    <Stack.Screen name="Agreement" component={Agreement} options={{ headerShown: false }} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
    <Stack.Screen name="TermsConditions" component={TermsConditions} options={{ headerShown: false }} />
    <Stack.Screen name="SelectLanguage" component={SelectLanguage} options={{ headerShown: false }} />
    <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const TabNavigator = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#3078EF',
      tabBarInactiveTintColor: '#FFFFFF',
      tabBarStyle: {
        backgroundColor: '#262A41',
        height: hp('8.5%')
      },
      tabBarLabelStyle: {
        display: 'none',
      },
      tabBarKeyboardHidesTabBar: true,
    })}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: 'center' }}>
            <Image
              source={Images.home}
              style={[{ width: 20, height: 20 }, focused && { tintColor: '#3078EF' }]}
            />
            { <Text style={{ color }}>Home</Text>}
          </View>
        ),
      })}
    />

    <Tab.Screen
      name="Countries"
      component={Countries}
      options={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 75,
        },
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: 'center' }}>
            <Image
              source={Images.countries}
              style={[{ width: 20, height: 20 }, focused && { tintColor: '#3078EF' }]}
            />
            { <Text style={{ color }}>Countries</Text>}
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: 'center' }}>
            <Image
              source={Images.notification}
              style={[{ width: 20, height: 20 }, focused && { tintColor: '#3078EF' }]}
            />
            { <Text style={{ color }}>Notifications</Text>}
          </View>
        ),
      }}
    />
   
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Stack" component={StackNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App