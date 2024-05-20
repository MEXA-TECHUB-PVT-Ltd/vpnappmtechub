import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';

const Loading = ({ navigation }) => {
  const [currentText, setCurrentText] = useState('Securing Your Connection...');
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setCurrentText('Finding the best servers for you...');
    }, 1000);

    const timeout2 = setTimeout(() => {
      setCurrentText('Ensuring Seamless Performance...');
    }, 2500);

    const timeout3 = setTimeout(() => {
      navigation.navigate('Tab');
    }, 4000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.loadingbackground}
        style={styles.image}
      >
        <View style={styles.text_view}>
          <Text style={styles.text}>{currentText}</Text>
          {/* <Text style={styles.text}>Finding the best servers for you...</Text>
          <Text style={styles.text}>Ensuring Seamless Performance...</Text> */}
        </View>
        <View style={styles.logo_view}>
          <Image
            source={Images.vpnlogogray}
            style={styles.logo_image}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10172A',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: hp('2%'),
    fontWeight: '600',
    lineHeight: 31,
    textAlign: 'center',
  },
  text_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_view: {
    height: hp('5%'),
  },
  logo_image: {
    width: wp('22%'),
    height: hp('3%'),

  },
})

export default Loading