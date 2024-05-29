import { View, Text, TouchableOpacity, StyleSheet, ScrollView,
   TextInput, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useRef } from 'react';
import CheckBox from '@react-native-community/checkbox';
import Dimension from '../../consts/Dimension';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../../consts/Images';

const languages = [
  { name: 'US - English', flag: Images.usflag },
  { name: 'Netherlands - Dutch', flag: Images.netherlandflag },
  { name: 'Singapore - Tamile', flag: Images.singaporeflag },
  { name: 'India - Hindi', flag: Images.indiaflag },
  { name: 'California - English', flag: Images.californiaflag },
  { name: 'Germany - German', flag: Images.germanyflag },
  { name: 'Canada - English', flag: Images.usflag },
  { name: 'UK - English', flag: Images.ukflag },
  { name: 'Germany - German', flag: Images.germanyflag },
  { name: 'Canada - English', flag: Images.ukflag }
];

const SelectLanguage = ({ navigation }) => {
  const [checkedStates, setCheckedStates] = useState(Array(languages.length).fill(false));
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleToggleFocus = () => {
    if (isFocused) {
      inputRef.current.blur();
    } else {
      inputRef.current.focus();
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleClear = () => {
    setSearchText('');
    inputRef.current.blur();
    setIsFocused(false);
  };

  const handleCheckboxChange = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  const searchAndReorder = (query) => {
    query = query.toLowerCase();

    const filteredLanguages = languages.filter(language =>
      language.name.toLowerCase().includes(query)
    );

    const reorderedLanguages = [
      ...filteredLanguages.filter(language => language.name.toLowerCase().startsWith(query)),
      ...filteredLanguages.filter(language => !language.name.toLowerCase().startsWith(query))
    ];

    return reorderedLanguages;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_view}>
        <Text style={styles.header_text}>Select Language</Text>
      </View>
      <TouchableWithoutFeedback onPress={handleToggleFocus}>
        <View style={[styles.search_view, isFocused && styles.search_view_Focused]}>
          <Image
            source={Images.searchiconblue}
            style={styles.search_icon}
          />
          <TextInput
            ref={inputRef}
            style={styles.search_input}
            placeholder={isFocused ? '' : 'Search here...'}
            placeholderTextColor='#D8D8D8'
            value={searchText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={setSearchText}
          />
          {isFocused && (
            <TouchableOpacity onPress={handleClear}>
              <Image
                source={Images.crossicon}
                style={styles.cross_icon}
              />
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <View style={styles.list_view}>
        {searchAndReorder(searchText).map((language, index) => (
          <View key={language.name} style={styles.rectangle_view}>
            {language.flag ? (
              <Image
                source={language.flag}
                style={{ width: 34, height: 34, borderRadius: 50, marginLeft: 10 }}
              />
            ) : (
              <View style={{ width: 34, height: 34, borderRadius: 50, marginLeft: 10 }} />
            )}
            <Text style={styles.rectangle_text}>{language.name}</Text>
            <View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginLeft: 10, justifyContent: 'flex-end' }}>
              <CheckBox
                value={checkedStates[index]}
                onValueChange={() => handleCheckboxChange(index)}
                tintColors={{ true: '#3078ef', false: 'white' }}
              />
            </View>
          </View>
        ))}
      </View>
      </ScrollView>
      <View style={styles.button_view}>
        <TouchableOpacity
          style={styles.getstarted_button}
          onPress={() => navigation.navigate('Loading')}
        >
          <Text style={styles.getstarted_text}>Select</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10172A',
    alignItems: 'center',
  },
  header_view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimension.width / 1.1,
    height: Dimension.height / 10,
    backgroundColor: 'transparent'
  },
  header_text: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    color: 'white',
  },
  search_view: {
    flexDirection: 'row',
    width: wp('85%'),
    height: hp('5.5%'),
    backgroundColor: '#262A41',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },
  search_view_Focused: {
    borderColor: '#277cff',
    borderWidth: 1,
  },
  search_icon: {
    width: wp('5%'),
    height: hp('2%'),
  },
  cross_icon: {
    width: wp('3%'),
    height: hp('1.5%'),
    tintColor: '#277cff',
    marginRight: 8,
  },
  search_input: {
    flex: 1,
    borderRadius: 10,
    paddingLeft: 20,
    color: '#FFFFFF',
  },
  clear_icon_container: {
    padding: 5,
    backgroundColor: 'red'
  },
  list_view: {
    flex: 1,
    width: wp('85%'),
    backgroundColor: '#10172A',
    marginTop: 3,
  },
  rectangle_view: {
    flexDirection: 'row',
    marginVertical: 3,
    width: wp('85%'),
    height: hp('6.5%'),
    backgroundColor: '#262A41',
    borderRadius: 14,
    alignItems: 'center',
  },
  rectangle_text: {
    color: '#FFFFFF',
    marginLeft: 16,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21,
  },
  button_view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('11%'),
    backgroundColor: '#10172A',
  },
  getstarted_button: {
    width: wp('85%'),
    height: hp('5.5%'),
    backgroundColor: "#277cff",
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getstarted_text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});

export default SelectLanguage;