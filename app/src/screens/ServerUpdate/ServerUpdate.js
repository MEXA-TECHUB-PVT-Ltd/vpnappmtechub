import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useEffect, useRef } from 'react';
import Images from '../../consts/Images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Dimension from '../../consts/Dimension';
import BottomSheet from '../BottomSheet/BottomSheet';
import VPNButton from '../../components/VPNButton/VPNButton';

const ServerUpdate = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.main_view}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={Images.gobackicon}
                            style={styles.back_icon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.header_text}>Server Update</Text>
                </View>

                <View style={styles.logo_view}>
                    <Text style={styles.logo_text}>New server available!
                     Explore faster speeds with our latest server locations in Singapore.
                      Connect now for optimized browsing.</Text>
                </View>
                <View style={styles.rectangle_view}>
                    <Image
                        source={Images.usflag}
                        style={{ width: 34, height: 34, borderRadius: 50, marginLeft: 10 }}
                    />
                    <View>
                        <Text style={styles.rectangle_text1}>United States</Text>
                        <Text style={styles.rectangle_text2}>Ip - 127.123.21.12</Text>
                    </View>
                </View>
               <VPNButton />
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
        marginLeft: 75,
    },
    logo_view: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('85%'),
    },
    logo_text: {
        color: '#CCCCCC',
        fontSize: 16,
        fontWeight: '500',
    },
    rectangle_view: {
        flexDirection: 'row',
        marginVertical: 3,
        width: wp('85%'),
        height: hp('7%'),
        backgroundColor: '#262A41',
        borderRadius: 18,
        alignItems: 'center',
        marginVertical: 45,
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
        fontSize: 12,
        lineHeight: 14,
    },
})

export default ServerUpdate