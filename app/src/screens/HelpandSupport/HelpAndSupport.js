import {View, Text, StyleSheet, Image, TouchableOpacity,TextInput} from 'react-native';
import React, { useState } from 'react';
import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';
import CheckBox from '@react-native-community/checkbox';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PopUpSuccessful from '../../components/PopUpSuccessful/PopUpSuccessful';

const HelpAndSupport = ({ navigation }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handlePopUp = () => {
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 1300);
        setTimeout(() => navigation.goBack(), 1300);
    };
    const [checkboxesState, setCheckboxesState] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    });

    const checkboxes = [
        "Too much advertising",
        "Speed too slow",
        "Always connecting",
        "Auto disconnected",
        "Server is full/sleepy"
    ];

    const handleCheckboxChange = (index) => {
        setCheckboxesState({
            ...checkboxesState,
            [index]: !checkboxesState[index]
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.gobackicon} style={styles.back_icon} />
                </TouchableOpacity>
                <Text style={styles.header_text}>Help & Support</Text>
            </View>
            <View style={styles.list_view}>
                {checkboxes.map((text, index) => (
                    <View key={index} style={styles.rectangle_view}>
                        <Text style={styles.rectangle_text}>{text}</Text>
                        <View style={styles.checkbox_container}>
                            <CheckBox
                                value={checkboxesState[index]}
                                onValueChange={() => handleCheckboxChange(index)}
                                tintColors={{ true: '#3078ef', false: 'white' }}
                            />
                        </View>
                    </View>
                ))}
                <TextInput
                    style={styles.textInput}
                    placeholder="Add feedback"
                    placeholderTextColor="#FFFFFF"
                    multiline={true}
                />
                <TouchableOpacity style={styles.getstarted_button} onPress={handlePopUp}>
                    <Text style={styles.getstarted_text}>Submit</Text>
                </TouchableOpacity>

            </View>
            <PopUpSuccessful successMessage="Message Sent Successfully!" visible={isPopupVisible} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10172A',
        alignItems: 'center'
    },
    header: {
        backgroundColor: 'transparent',
        width: Dimension.width,
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
    list_view: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
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
        flex: 1
    },
    checkbox_container: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'flex-end'
    },
    textInput: {
        marginVertical: 3,
        width: wp('85%'),
        height: hp('20%'),
        backgroundColor: '#262A41',
        borderRadius: 14,
        padding: 10,
        lineHeight: 30,
        textAlignVertical: 'top',
    },
    getstarted_button: {
        width: wp('85%'),
        height: hp('5.5%'),
        backgroundColor: "#277cff",
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 100,
    },
    getstarted_text: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
    },
});

export default HelpAndSupport;
