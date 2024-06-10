import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';

const SearchCountries = ({ navigation, route }) => {
    const { countries } = route.params;
    const [searchText, setSearchText] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    const handleSearch = (text) => {
        setSearchText(text);
        if (text) {
            const filtered = countries.filter(country =>
                country.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredCountries(filtered);
        } else {
            setFilteredCountries([]);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.icon_textinput_view}>
                <TouchableOpacity
                    style={styles.back_icon_view}
                    onPress={() => navigation.navigate('Countries')}
                >
                    <Image
                        source={Images.gobackicon}
                        style={styles.back_icon}
                    />
                </TouchableOpacity>
                <View style={styles.search_input_container}>
                    <Image
                        source={Images.searchiconblue}
                        style={styles.search_icon_input}
                    />
                    <TextInput
                        style={styles.search_input}
                        placeholder="Search here"
                        placeholderTextColor="#FFFFFF"
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {
                    searchText ? (
                        filteredCountries.map((country, index) => (
                            <View key={index} style={styles.list_view}>
                                <View style={styles.rectangle_view}>
                                    <Image
                                        source={country.flag}
                                        style={{ width: 34, height: 34, borderRadius: 50, marginLeft: 10 }}
                                    />
                                    <View style={styles.texts_view}>
                                        <Text style={styles.rectangle_text}>{country.name}</Text>
                                        <Text style={styles.rectangle_text2}>{country.ip}</Text>
                                    </View>
                                    {country.premiumicon && (
                                        <View style={styles.premium_icon_view}>
                                            <Image
                                                source={country.premiumicon}
                                                style={styles.premium_icon}
                                            />
                                        </View>
                                    )}
                                    <View style={styles.signal_icon_view}>
                                        <Image
                                            source={country.signal}
                                            style={styles.signal_icon}
                                        />
                                    </View>
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noResultsText}>Search for a Country</Text>
                    )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#10172A',
    },
    icon_textinput_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10
    },
    search_icon_view: {
        justifyContent: 'center',
        marginVertical: 3,
        width: '13%',
        height: 50,
        backgroundColor: '#262A41',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#236DDF',
        alignItems: 'center',
        marginLeft: 8,
    },
    texts: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 14,
        marginRight: 14,
    },
    rectangle_text1: {
        color: '#FFFFFF',
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
    },
    rectangle_text2: {
        color: '#7C7F90',
        marginLeft: 16,
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 18,
    },
    signal_icon_view: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginRight: 20,
    },
    premium_icon_view: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginRight: 10,
    },
    premium_icon: {
        width: wp('9%'),
        height: hp('3%'),
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingBottom: hp('8%'),
    },
    scrollViewContentEmpty: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        backgroundColor: '#262A41',
        borderRadius: 14,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    texts_view: {
        flex: 1,
    },
    rectangle_text: {
        color: '#FFFFFF',
        marginLeft: 16,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 21,
    },
    back_icon_view: {
        width: wp('10%'),
        height: hp('5.2%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 5,
        marginLeft: 10,
    },
    back_icon: {
        width: wp('5%'),
        height: hp('5%'),
    },
    search_icon_input: {
        width: wp('4.5%'),
        height: hp('3%'),
        marginRight: 10,
    },
    search_input_container: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#262A41',
        color: 'white',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 20,
        paddingLeft: 10,
        alignItems: 'center'
    },
    search_input: {
        flex: 1,
        color: 'white'
    },
    noResultsText: {
        color: '#7C7F90',
        marginTop: 12,
        fontSize: 15,
        textAlign: 'center'
    }
});

export default SearchCountries;