import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import Images from '../../consts/Images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const BottomSheet = ({ visible, dataAmount, elapsedTime, onClose }) => {
    if (!visible) {
        return null;
    }

    const formatElapsedTime = (seconds) => {
        if (isNaN(seconds)) {
            return '00:00:00';
        }
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs < 10 ? '0' : ''}${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
        >
            <View style={styles.bottomSheetContainer}>
                <View style={styles.modal_view}>
                    <Text style={styles.connect_report_text}>Connect Report</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Image
                            source={Images.crossicon}
                            style={styles.closeIcon} />
                    </TouchableOpacity>

                    <View style={styles.rectangle_view}>
                        <Image
                            source={Images.usflag}
                            style={styles.flag}
                        />
                        <View style={styles.texts}>
                            <Text style={styles.rectangle_text1}>United States</Text>
                            <Text style={styles.rectangle_text2}>IP - 127.123.21.12</Text>
                        </View>
                    </View>

                    <View style={styles.connected_info}>
                        <View style={styles.data_view}>
                            <Image
                                source={Images.dataicon}
                                style={styles.data_icon} />
                            <Text style={styles.data_text}>{dataAmount}</Text>
                        </View>
                        <View style={styles.time_view}>
                            <Image
                                source={Images.timericon}
                                style={styles.timer_icon} />
                            <Text style={styles.time_text}>{formatElapsedTime(elapsedTime)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    bottomSheetContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal_view: {
        height: hp('36%'),
        backgroundColor: '#10172A',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    connect_report_text: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 20,
        left: 20,
        fontSize: 19,
        fontWeight: '600',
        color: '#fff',
        
    },
    closeButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 20,
        right: 20,
    },
    closeIcon: {
        width: wp('4.4%'),
        height: hp('2.3%'),
        tintColor: 'white',
    },
    rectangle_view: {
        flexDirection: 'column',
        marginVertical: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    flag: {
        width: wp('16%'),
        height: hp('8%'),
        borderRadius: 50,
    },
    texts: {
        flexDirection: 'row',
        marginVertical: 10,
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
    connected_info: {
        width: wp('78%'),
        height: hp('6%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: 'transparent'
    },
    data_view: {
        flexDirection: 'row',
        width: wp('37%'),
        backgroundColor: '#262A41',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1.4,
        borderColor: '#3D83FF',
        borderRadius: 12,
    },
    data_icon: {
        width: wp('6%'),
        height: hp('4%'),
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    data_text: {
        fontSize: 19,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    time_view: {
        flexDirection: 'row',
        width: wp('37%'),
        backgroundColor: '#262A41',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1.4,
        borderColor: '#3D83FF',
        borderRadius: 12,
    },
    timer_icon: {
        width: wp('6%'),
        height: hp('4%'),
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    time_text: {
        fontSize: 19,
        fontWeight: '500',
        color: '#FFFFFF',
    },
});

export default BottomSheet;