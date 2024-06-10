import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';
import * as Progress from 'react-native-progress';

const AppUpdate = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={Images.gobackicon}
                        style={styles.back_icon}
                    />
                </TouchableOpacity>

                <Text style={styles.header_text}>App Update</Text>
            </View>
            <Image
                source={Images.vpnlogo}
                style={styles.logo}
            />
            <View style={styles.text_view}>
                <Text style={styles.update_text}>
                    Update Available! Experience enhanced performance and
                    new features with the latest version of our VPN app.
                    Update now for the best user experience.
                </Text>
            </View>

            <View style={styles.button_view}>
                <TouchableOpacity
                    style={styles.update_button}
                    // onPress={() => navigation.navigate('')}
                >
                    <Text style={styles.update_button_text}>Update App</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#10172A'
    },
    header: {
        backgroundColor: 'transparent',
        width: Dimension.width / 1,
        height: Dimension.height / 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 0,
    },
    back_icon: {
        width: Dimension.width / 18,
        height: Dimension.height / 18,
        marginLeft: 25,
    },
    header_text: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginLeft: 90,
    },
    logo: {
        width: Dimension.width / 3.5,
        height: Dimension.height / 5.8,
        marginVertical: 50,
    },
    text_view: {
        width: wp('82%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#10172A',
    },
    update_text: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        lineHeight: 24,
    },
    button_view: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('100%'),
        height: hp('11%'),
        backgroundColor: '#10172A',
        marginVertical: 100,
    },
    update_button: {
        width: wp('85%'),
        height: hp('5.5%'),
        backgroundColor: "#277cff",
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    update_button_text: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
    },

})

export default AppUpdate