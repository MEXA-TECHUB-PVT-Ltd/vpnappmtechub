import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Images from '../../consts/Images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RateApp = () => {
  const [rating, setRating] = useState(0);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [showReviewInput, setShowReviewInput] = useState(false);
  const [reviewText, setReviewText] = useState('');

  const handleStarPress = (index) => {
    setRating(index + 1);
    setSubmitDisabled(false);
    setShowReviewInput(true);
  };

  const handleReviewChange = (text) => {
    setReviewText(text);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
          <Image
            source={rating > i ? Images.starfilledicon : Images.staroutlineicon}
            style={styles.starIcon}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.modal_view}>
        <View style={styles.header_view}>
          <View style={styles.header_left}>
            <Image source={Images.playstoreicon} style={styles.playstore_icon} />
            <Text style={styles.header_text}>Google Play</Text>
          </View>
          <View style={styles.header_right}>
            <Text style={styles.name_text}>Andrew Chow</Text>
            <View style={styles.magenta_box}>
              <Text style={styles.magenta_text}>A</Text>
            </View>
          </View>
        </View>

        {showReviewInput ? null : (
          <View style={styles.inapp_review}>
            <Image source={Images.vpnsolologo} style={styles.inapp_icon} />
            <View style={styles.inapp_texts_view}>
              <Text style={styles.inapp_text_top}>InAppReview.Android</Text>
              <Text style={styles.inapp_text_bottom}>Your review is private and includes your Google profile name and photo.</Text>
            </View>
          </View>
        )}

        {showReviewInput ? (
          <TextInput
            style={styles.reviewInput}
            placeholder="(Optional) Tell others what you think"
            placeholderTextColor="gray"
            multiline
            numberOfLines={4}
            borderWidth={1}
            borderColor="gray"
            onChangeText={handleReviewChange}
          />
        ) : null}

        {showReviewInput ? (
          <View style={styles.reviewCounter}>
            <Text style={styles.reviewCounterText}>Private review</Text>
            <Text style={styles.reviewCounterText}>{reviewText.length}/500</Text>
          </View>
        ) : null}

        <View style={styles.rating_view}>{renderStars()}</View>

        <View style={styles.buttons_view}>
          <TouchableOpacity style={styles.notnow_button}>
            <Text style={styles.button_text}>Not now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.submit_button, { backgroundColor: submitDisabled ? '#f1f3f4' : '#1c8561' }]}
            disabled={submitDisabled}
          >
            <Text style={[styles.button_text, { color: submitDisabled ? 'gray' : 'white' }]}>Submit</Text>
          </TouchableOpacity>
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
    backgroundColor: 'white',
    paddingHorizontal: wp('5%'),
  },
  header_view: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
  header_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playstore_icon: {
    width: wp('7%'),
    height: wp('7%'),
  },
  header_text: {
    marginLeft: wp('2%'),
    fontSize: wp('4%'),
  },
  header_right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name_text: {
    marginRight: wp('2%'),
    fontSize: wp('4%'),
    fontWeight: '400',
    color: 'black'
  },
  magenta_box: {
    backgroundColor: '#5c6dbf',
    width: wp('6%'),
    height: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  magenta_text: {
    color: 'white',
    fontSize: wp('4%'),
  },
  inapp_review: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: hp('8%'),
  },
  inapp_texts_view: {
    flex: 1,
  },
  inapp_icon: {
    width: wp('7%'),
    height: wp('7%'),
  },
  inapp_text_top: {
    marginLeft: wp('2%'),
    fontSize: wp('4%'),
    color: 'black'
  },
  inapp_text_bottom: {
    marginLeft: wp('2%'),
    fontSize: wp('3%'),
    color: 'gray',
  },
  rating_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp('3%'),
  },
  starIcon: {
    width: wp('7%'),
    height: wp('7%'),
    marginHorizontal: wp('4%'),
  },
  buttons_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notnow_button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: hp('1%'),
    borderRadius: wp('1%'),
    marginRight: wp('2%'),
    borderWidth: 2,
    borderColor: '#f1f3f4'
  },
  submit_button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: hp('1%'),
    borderRadius: wp('1%'),
    marginRight: wp('2%'),
    backgroundColor: '#f1f3f4',
  },
  button_text: {
    fontSize: wp('4%'),
    color: '#1c8561'
  },
  reviewInput: {
    height: hp('5'),
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
  },
  reviewCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewCounterText: {
    fontSize: wp('4%'),
    color: 'gray',
  },
});

export default RateApp;
