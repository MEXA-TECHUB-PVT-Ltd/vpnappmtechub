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
import Subscription from './app/src/screens/Subscription/Subscription';
import SubscriptionBottomSheet from './app/src/screens/SubscriptionBottomSheet/SubscriptionBottomSheet';
import SearchLocation from './app/src/screens/SearchLocation/SearchLocation';
import AppUpdate from './app/src/screens/AppUpdate/AppUpdate';
import ConnectionStatus from './app/src/screens/ConnectionStatus/ConnectionStatus';
import ServerUpdate from './app/src/screens/ServerUpdate/ServerUpdate';
import SearchCountries from './app/src/screens/SearchCountreis/SearchCountries';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="SubscriptionBottomSheet" component={SubscriptionBottomSheet} options={{ headerShown: false }} />

  </Stack.Navigator>
);

const CountriesStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Countries" component={Countries} options={{ headerShown: false }} />

  </Stack.Navigator>
);

const NotificationsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />

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
      name="HomeTab"
      component={HomeStackNavigator}
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
      name="CountriesTab"
      component={CountriesStackNavigator}
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
      name="NotificationsTab"
      component={NotificationsStackNavigator}
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

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    <Stack.Screen name="Agreement" component={Agreement} options={{ headerShown: false }} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
    <Stack.Screen name="TermsConditions" component={TermsConditions} options={{ headerShown: false }} />
    <Stack.Screen name="SelectLanguage" component={SelectLanguage} options={{ headerShown: false }} />
    <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
    <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="Subscription" component={Subscription} options={{ headerShown: false }} />
    <Stack.Screen name="SearchLocation" component={SearchLocation} options={{ headerShown: false }} />
    <Stack.Screen name="AppUpdate" component={AppUpdate} options={{ headerShown: false }} />
    <Stack.Screen name="ConnectionStatus" component={ConnectionStatus} options={{ headerShown: false }} />
    <Stack.Screen name="ServerUpdate" component={ServerUpdate} options={{ headerShown: false }} />
    <Stack.Screen name="SubscriptionBottomSheet" component={SubscriptionBottomSheet} options={{ headerShown: false }} />
    <Stack.Screen name="SearchCountries" component={SearchCountries} options={{ headerShown: false }} />

  </Stack.Navigator>
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