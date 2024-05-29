import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, Switch } from 'react-native'
import React from 'react';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Dimension from './app/src/consts/Dimension';
import Splash from './app/src/screens/Splash/Splash';
import Agreement from './app/src/screens/Agreement/Agreement';
import PrivacyPolicy from './app/src/screens/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './app/src/screens/TermsConditions/TermsConditions';
import SelectLanguage from './app/src/screens/SelectLanguage/SelectLanguage';
import VPNButton from './app/src/components/VPNButton/VPNButton';
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
import SearchCountries from './app/src/screens/SearchCountries/SearchCountries';
import HelpAndSupport from './app/src/screens/HelpandSupport/HelpAndSupport';
import FAQs from './app/src/screens/FAQs/FAQs';
import FilterApps from './app/src/screens/FilterApps/FilterApps';
import ChangeLanguage from './app/src/screens/ChangeLanguage/ChangeLanguage';
import LiveChat from './app/src/screens/LiveChat/LiveChat';
import RateApp from './app/src/screens/RateApp/RateApp';
import ShareApp from './app/src/screens/ShareApp/ShareApp';
import Mcicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Anticon from 'react-native-vector-icons/AntDesign';
import Faicon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
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

//add logo to drawer
function CustomizeDrawer(props) {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
  const toggleNotificationsSwitch = () => setIsNotificationsEnabled(previousState => !previousState);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logo_view}>
        <Image
          source={Images.vpnlogo1}
          style={styles.image}
        />
        <View style={styles.line_view} />
      </View>

      <DrawerItemList {...props} />

      <View style={styles.customDrawerItem}>
        <Ionicon name="notifications-outline" size={25} color="white" />
        <Text style={styles.customDrawerItemText}>Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotificationsSwitch}
          trackColor={{ false: "#767577", true: "#267CFF" }}
          thumbColor={isNotificationsEnabled ? "white" : "#f4f3f4"}
        />
      </View>
    </DrawerContentScrollView>
  );
}


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#10172A',
          color: 'white',
        },
        drawerLabelStyle: {
          color: 'white',
        },
        drawerContentOptions: {
          activeBackgroundColor: 'transparent', 
          inactiveBackgroundColor: 'transparent', 
        },
      }}
      drawerContent={(props) => <CustomizeDrawer {...props} />}
    >
      <Drawer.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          headerShown: false,
          drawerItemStyle: { height: 0 }
        }}
      />
      <Drawer.Screen
        name="Filter Apps"
        component={FilterApps}
        options={{
          drawerIcon: ({ color, size }) => (
            <Mcicon name="filter-outline" color='white' size={25} />
          ),
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="Change Language"
        component={ChangeLanguage}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicon name="language" color='white' size={25} />
          ),
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="Live Chat"
        component={LiveChat}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicon name="chatbubble-ellipses-outline" color='white' size={25} />
          ),
          headerShown: false,
           drawerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
      <Drawer.Screen
        name="FAQs"
        component={FAQs}
        options={{
          drawerIcon: ({ color, size }) => (
            <Anticon name="questioncircleo" color='white' size={25} />
          ),
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
      <Drawer.Screen
        name="Help & Support"
        component={HelpAndSupport}
        options={{
          drawerIcon: ({ color, size }) => (
            <Anticon name="customerservice" color='white' size={25} />
          ),
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{
          drawerIcon: ({ color, size }) => (
            <Mcicon name="lock-outline" color='white' size={25} />
          ),
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="Terms & Conditions"
        component={TermsConditions}
        options={{
          drawerIcon: ({ color, size }) => (
            <Anticon name="filetext1" color='white' size={25} />
          ),
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="Rate App"
        component={RateApp}
        options={{
          drawerIcon: ({ color, size }) => (
            <Mcicon name="star-outline" color='white' size={25} />
          ),
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="Share App"
        component={ShareApp}
        options={{
          drawerIcon: ({ color, size }) => (
            <Anticon name="sharealt" color='white' size={25} />
          ),
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
};

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
            {<Text style={{ color }}>Home</Text>}
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
            {<Text style={{ color }}>Countries</Text>}
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
            {<Text style={{ color }}>Notifications</Text>}
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    <Stack.Screen name="Agreement" component={Agreement} options={{ headerShown: false }} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
    <Stack.Screen name="TermsConditions" component={TermsConditions} options={{ headerShown: false }} />
    <Stack.Screen name="SelectLanguage" component={SelectLanguage} options={{ headerShown: false }} />
    <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
    <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
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
      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo_view: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line_view: {
    width: '90%',
    height: 1.2,
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  image: {
    width: Dimension.width / 2.6,
    height: Dimension.height / 8,
    resizeMode: 'contain',
    marginVertical: 6,
  },
  customDrawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 18,
   
  },
  customDrawerItemText: {
    flex: 1,
    marginLeft: 30,
    fontSize: 14,
    color: 'white',
  },
})

export default App