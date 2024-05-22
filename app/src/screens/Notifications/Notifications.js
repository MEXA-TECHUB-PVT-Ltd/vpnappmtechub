import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';

const notifications = [
  {
    id: 1,
    notificationname: 'Connection Status Update',
    icon: Images.connectionstatusicon,
    notificationdescription: 'You are now securely connected to the VPN server. Your online activities are protected.'
  },
  {
    id: 2,
    notificationname: 'Server Update',
    icon: Images.serverupdateicon,
    notificationdescription: 'New server available! Explore faster speeds with our latest server locations in Singapore. Connect now for optimized browzing.'
  },
  {
    id: 3,
    notificationname: 'App Update',
    icon: Images.appupdateicon,
    notificationdescription: 'Update Available! Experience enhanced performance and new features with the latest version of our VPN app. Update now for the best user experience.',
  },
  {
    id: 4,
    notificationname: 'Connection Status Update',
    icon: Images.connectionstatusicon,
    notificationdescription: 'You are now securely connected to the VPN server. Your online activities are protected.'
  },
  {
    id: 5,
    notificationname: 'Server Update',
    icon: Images.serverupdateicon,
    notificationdescription: 'New server available! Explore faster speeds with our latest server locations in Singapore. Connect now for optimized browzing.'
  },
  {
    id: 6,
    notificationname: 'App Update',
    icon: Images.appupdateicon,
    notificationdescription: 'Update Available! Experience enhanced performance and new features with the latest version of our VPN app. Update now for the best user experience.',
  },
  {
    id: 7,
    notificationname: 'Connection Status Update',
    icon: Images.connectionstatusicon,
    notificationdescription: 'You are now securely connected to the VPN server. Your online activities are protected.'
  },
  {
    id: 8,
    notificationname: 'Server Update',
    icon: Images.serverupdateicon,
    notificationdescription: 'New server available! Explore faster speeds with our latest server locations in Singapore. Connect now for optimized browzing.'
  },
  {
    id: 9,
    notificationname: 'App Update',
    icon: Images.appupdateicon,
    notificationdescription: 'Update Available! Experience enhanced performance and new features with the latest version of our VPN app. Update now for the best user experience.',
  },
  {
    id: 10,
    notificationname: 'Connection Status Update',
    icon: Images.connectionstatusicon,
    notificationdescription: 'You are now securely connected to the VPN server. Your online activities are protected.'
  },

];

export default Notifications = ({ navigation}) => {
  const [showImage, setShowImage] = useState(true);
  const [readNotifications, setReadNotifications] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  const handleNotificationPress = (notifications) => {
    if (!readNotifications.includes(notifications.id)) {
      setReadNotifications([...readNotifications, notifications.id]);
    }

    const { notificationname } = notifications;

    switch (notificationname) {
      case 'Connection Status Update':
        navigation.navigate('ConnectionStatus');
        break;
      case 'Server Update':
        navigation.navigate('ServerUpdate');
        break;
      case 'App Update':
        navigation.navigate('AppUpdate');
        break;
      default:
        break;
    }}

  if (showImage) {
    return (
      <View style={styles.image_container}>
        <View style={styles.header_view}>
          <View style={styles.drawer_icon_view}>
            <Image
              source={Images.drawericon}
              style={styles.drawer_icon}
            />
          </View>
          <Text style={styles.header_text}>Notifications</Text>
          <TouchableOpacity
            style={styles.subscription_view}
            // onPress={() => navigation.navigate('Subscription')}
          >
            <Image
              source={Images.subscriptionicon}
              style={styles.subscription_icon}
            />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={Images.notifications}
            style={styles.Image}
          />
          <Text style={styles.text}>You don't have any notifications yet.</Text>
        </View>
        <View style={styles.ads_view}>
          <Text style={styles.text_ads}>Ads</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header_view}>
        <View style={styles.drawer_icon_view}>
          <Image
            source={Images.drawericon}
            style={styles.drawer_icon}
          />
        </View>
        <Text style={styles.header_text}>Notifications</Text>
        <TouchableOpacity
          style={styles.subscription_view}
          onPress={() => navigation.navigate('Subscription', { previousScreen: 'Notifications' })}
        >
          <Image
            source={Images.subscriptionicon}
            style={styles.subscription_icon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.list_view}>
          {notifications.map((notifications) => (

            <TouchableOpacity
              key={notifications.id}
              style={[
                styles.rectangle_view,
                readNotifications.includes(notifications.id) && styles.readNotification,
              ]}
              onPress={() => handleNotificationPress(notifications)}
            >
              <View style={styles.icon_background}>
                {notifications.icon && (
                  <Image
                    source={notifications.icon}
                    style={{ width: 22, height: 22 }}
                  />
                )}
              </View>
              <View style={styles.texts_main_view}>
                <View style={styles.nameandtime_view}>
                  <Text style={styles.rectangle_text}>{notifications.notificationname}</Text>
                  <Text style={styles.current_time}>3:24</Text>
                </View>
                <View style={styles.description_view}>
                  <Text style={styles.rectangle_text2}>{notifications.notificationdescription}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.ads_view}>
        <Text style={styles.text_ads}>Ads</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#10172A',
  },
  image_container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#10172A',
  },
  Image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  header_view: {
    backgroundColor: 'transparent',
    height: hp('8%'),
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  drawer_icon_view: {
    backgroundColor: '#262A41',
    width: wp('8.4%'),
    height: hp('3.8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

  },
  drawer_icon: {
    width: wp('5%'),
    height: hp('2%'),
  },
  header_text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  subscription_view: {
    backgroundColor: 'transparent',
    width: wp('8.4%'),
    height: hp('3.7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscription_icon: {
    width: wp('8%'),
    height: hp('4%'),
    marginRight: 10,
  },
  description_view: {
    flexWrap: 'wrap',
    overflow: 'hidden',
    width: wp('70%'),
    marginRight: 18,
    backgroundColor: 'transparent',

  },
  rectangle_text2: {
    color: '#7C7F90',
    fontWeight: "500",
    fontSize: 13,

  },
  scrollViewContent: {
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  list_view: {
    width: '95%',
    backgroundColor: '#10172A',
    marginTop: 3,
  },
  rectangle_view: {
    flexDirection: 'row',
    marginVertical: 3,
    width: '100%',
    height: 50,
    backgroundColor: '#2E4A7F',
    borderRadius: 14,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  readNotification: {
    backgroundColor: '#3A3A55',
  },
  icon_background: {
    width: 36,
    height: 36,
    borderRadius: 20,
    marginLeft: 8,
    backgroundColor: '#4D8EFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts_main_view: {
    backgroundColor: 'transparent',
    paddingTop: 15,
  },
  nameandtime_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 16,
  },
  rectangle_text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    backgroundColor: 'transparent'
  },
  ads_view: {
    width: wp('100%'),
    backgroundColor: '#424262',
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_ads: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

