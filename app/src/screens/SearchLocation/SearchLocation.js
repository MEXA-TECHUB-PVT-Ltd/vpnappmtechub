import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';

const countries = [
    { name: 'Singapore', flag: Images.singaporeflag, ip: 'IP - 192.168.0.1', premiumicon: null, signal: Images.greensignalicon },
    { name: 'Netherlands', flag: Images.netherlandflag, ip: 'IP - 10.0.0.1', premiumicon: null, signal: Images.yellowsignalicon },
    { name: 'US - New York', flag: Images.usflag, ip: 'IP - 172.16.0.1', premiumicon: null, signal: Images.redsignalicon },
    { name: 'India - Bangalore', flag: Images.indiaflag, ip: 'IP - 192.0.2.1', premiumicon: Images.subscriptionicon, signal: Images.greensignalicon },
    { name: 'California', flag: Images.californiaflag, ip: 'IP - 172.31.0.1', premiumicon: Images.subscriptionicon, signal: Images.greensignalicon },
    { name: 'Germany - Frankfurt', flag: Images.germanyflag, ip: 'IP - 192.168.1.1', premiumicon: Images.subscriptionicon, signal: Images.greensignalicon },
    { name: 'Canada - Toronto', flag: Images.usflag, ip: 'IP - 172.17.0.1', premiumicon: Images.subscriptionicon, signal: Images.greensignalicon },
    { name: 'UK - London', flag: Images.ukflag, ip: 'IP - 10.1.1.1', premiumicon: Images.subscriptionicon, signal: Images.greensignalicon },
    { name: 'Germany - Frankfurt', flag: Images.germanyflag, ip: 'IP - 192.168.2.1', premiumicon: Images.subscriptionicon, signal: Images.greensignalicon },
    { name: 'Canada - Toronto', flag: Images.ukflag, ip: 'IP - 10.2.2.1', premiumicon: Images.subscriptionicon, signal: Images.greensignalicon },

];

const SearchLocation = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.header_view}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={Images.gobackicon}
                        style={styles.back_icon}
                    />
                </TouchableOpacity>
                <Text style={styles.header_text}>Search Location</Text>
                <TouchableOpacity
                    style={styles.subscription_view}
                    onPress={() => navigation.navigate('Subscription', { previousScreen: 'Countries' })}
                >
                    <Image
                        source={Images.subscriptionicon}
                        style={styles.subscription_icon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.rectangle_view_region}>
                <Image
                    source={Images.globalicon}
                    style={styles.regin_icon}
                />
                <View style={styles.texts}>
                    <Text style={styles.rectangle_text1}>Connect Fastest Server</Text>
                    <Switch
                        trackColor={{ false: 'gray', true: '#3078ef' }}
                        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scale: 1 }] }}
                    />
                </View>

            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                <View style={styles.list_view}>
                    {countries.map((countries, index) => (
                        <View key={index} style={styles.rectangle_view}>
                            {countries.flag && (
                                <Image
                                    source={countries.flag}
                                    style={{ width: 34, height: 34, borderRadius: 50, marginLeft: 10 }}
                                />
                            )}
                            <View style={styles.texts_view}>
                                <Text style={styles.rectangle_text}>{countries.name}</Text>
                                <Text style={styles.rectangle_text2}>{countries.ip}</Text>
                            </View>
                            {countries.premiumicon && (
                                <View style={styles.premium_icon_view}>
                                    <Image
                                        source={countries.premiumicon}
                                        style={styles.premium_icon}
                                    />
                                </View>
                            )}
                            <View style={styles.signal_icon_view}>
                                <Image
                                    source={countries.signal}
                                    style={styles.signal_icon}
                                />
                            </View>
                        </View>
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
        // position: 'relative',

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
    back_icon: {
        width: Dimension.width / 18,
        height: Dimension.height / 18,
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
    rectangle_view_region: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 3,
        width: '90%',
        height: 50,
        backgroundColor: '#262A41',
        borderRadius: 14,
        alignItems: 'center',
    },
    regin_icon: {
        width: 34,
        height: 34,
        borderRadius: 50,
        marginLeft: 10,

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
    signal_icon: {

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
    ads_view: {
        // position: 'absolute',
        width: wp('100%'),
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

export default SearchLocation