import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useEffect } from 'react';
import Images from '../../consts/Images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SubscriptionBottomSheet from '../SubscriptionBottomSheet/SubscriptionBottomSheet';
import VPNButton from '../../components/VPNButton/VPNButton';
import { useDispatch, useSelector } from 'react-redux';
import { resetElapsedTime } from '../../redux/vpnSlice';

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const {connected, connecting, elapsedTime, statusText, dataAmount} = useSelector(state => state.vpn);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!connected) {
        dispatch(resetElapsedTime());
      }
    });

    return unsubscribe;
  }, [navigation, connected, dispatch]);

  const [isSubscriptionVisible, setSubscriptionVisible] = useState(true);

  useEffect(() => {
    setSubscriptionVisible(true);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main_view}>
        <View style={styles.header_view}>
          <TouchableOpacity
            style={styles.drawer_icon_view}
            onPress={() => navigation.openDrawer()}
          >
            <Image
              source={Images.drawericon}
              style={styles.drawer_icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subscription_view}
            onPress={() => navigation.navigate('Subscription', { previousScreen: 'Home' })}
          >
            <Image
              source={Images.subscriptionicon}
              style={styles.subscription_icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.logo_view}>
          <Text style={styles.logo_text}>Welcome To</Text>
          <Image
            source={Images.vpnlogo1}
            style={styles.logo_image}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchLocation', { previousScreen: 'Home' })}
        >
          <View style={styles.rectangle_view}>
            <Image
              source={Images.usflag}
              style={{ width: 34, height: 34, borderRadius: 50, marginLeft: 10 }}
            />
            <View>
              <Text style={styles.rectangle_text1}>United States</Text>
              <Text style={styles.rectangle_text2}>Ip - 127.123.21.12</Text>
            </View>
            <View style={{
              flex: 1, flexDirection: 'row', marginRight: 20, marginLeft: 10,
              justifyContent: 'flex-end'
            }}>
              <Image
                source={Images.arrowrighticon}
                style={styles.arrow_right_icon} />
            </View>
          </View>
        </TouchableOpacity>
        <VPNButton 
          connected={connected}
          connecting={connecting}
          elapsedTime={elapsedTime}
          statusText={statusText}
          dataAmount={dataAmount}
        />
      </View>

      <SubscriptionBottomSheet
        visible={isSubscriptionVisible}
        onClose={() => setSubscriptionVisible(false)}
      />

      <View style={styles.ads_view}>
        <Text style={styles.text_ads}>Ads</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10172A',
  },
  main_view: {
    flex: 1,
    alignItems: 'center'
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
    height: hp('3.7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  drawer_icon: {
    width: wp('5%'),
    height: hp('2%'),
  },
  subscription_view: {
    backgroundColor: 'transparent',
    width: wp('8.4%'),
    height: hp('3.7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  subscription_icon: {
    width: wp('8%'),
    height: hp('4%'),
  },
  logo_view: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_text: {
    color: '#CCCCCC',
    fontSize: 17,
    fontWeight: '500',
  },
  logo_image: {
    width: wp('32%'),
    height: hp('9%'),
    resizeMode: 'contain',
    backgroundColor: 'transparent'
  },
  rectangle_view: {
    flexDirection: 'row',
    width: wp('85%'),
    height: hp('7%'),
    backgroundColor: '#262A41',
    borderRadius: 18,
    alignItems: 'center',
    marginVertical: 42,
    borderWidth: 1.2,
    borderColor: '#3D83FF',
  },
  rectangle_text1: {
    color: '#FFFFFF',
    marginLeft: 16,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
  },
  rectangle_text2: {
    color: '#7C7F90',
    marginLeft: 16,
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
  },
  ads_view: {
    backgroundColor: '#424262',
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_ads: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
})

export default Home