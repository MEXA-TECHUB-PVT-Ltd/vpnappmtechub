import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Images from '../../consts/Images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const firstRowOptions = [
  { icon: Images.whatsappicon, label: 'Whatsapp' },
  { icon: Images.facebookicon, label: 'Facebook' },
  { icon: Images.twittericon, label: 'Twitter' },
  { icon: Images.instagramicon, label: 'Instagram' },
];

const secondRowOptions = [
  { icon: Images.netflixicon, label: 'Netflix' },
  { icon: Images.snapchaticon, label: 'Snapchat' },
  { icon: Images.tindericon, label: 'Tinder' },
  { icon: Images.connectingicon, label: 'Others' },
 
];

const ShareApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modal_view}>
        <View style={styles.row_view}>
          {firstRowOptions.map((option, index) => (
            <View key={index} style={styles.icon_text_view}>
              <View style={styles.icon_backgrounnd}>
                <Image
                  source={option.icon}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>{option.label}</Text>
            </View>
          ))}
        </View>
        <View style={styles.row_view}>
          {secondRowOptions.map((option, index) => (
            <View key={index} style={styles.icon_text_view}>
              <View style={styles.icon_backgrounnd}>
              <Image
                source={option.icon}
                style={styles.image}
              />
              </View>
              <Text style={styles.text}>{option.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal_view: {
    height: hp('36%'),
    backgroundColor: '#10172A',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center'
  },
  row_view: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  icon_text_view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_backgrounnd: {
    width: wp('10%'),
    height: wp('10%'),
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  image: {
    width: wp('7%'),
    height: wp('7%'),
    borderRadius: 50,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ShareApp;
