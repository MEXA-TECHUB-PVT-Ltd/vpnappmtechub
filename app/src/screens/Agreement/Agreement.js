import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import Dimension from '../../consts/Dimension';
import Images from '../../consts/Images';
import { useNavigation } from '@react-navigation/native';

const Agreement = ({navigation}) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={Images.bgimage}
                style={styles.image}
            >
                <Text style={styles.text_safely}>Unlock the World Safely!</Text>
                <Text style={styles.text_below_safely}>Your Passport to Seamless Security with
                    our VPN App!</Text>
            </ImageBackground>
            <View style={{
                flex: 1, justifyContent: 'flex-start',
                backgroundColor: 'transparent', marginBottom: 40
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start', alignItems: 'center', marginTop: 60,
                }}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={handleCheckboxChange} />
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '300' }}>By Clicking, you are agreeing to</Text>
                </View>

                <View style={{flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PrivacyPolicy')}
                        // disabled={!isChecked}
                        >
                        <Text style={{ color: 'white', marginLeft: 32 }}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, marginLeft: 5 }}>&</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TermsConditions')}
                        // disabled={!isChecked}
                        >
                        <Text style={{ color: 'white', marginLeft: 5 }}>Terms and Conditions</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={[
                        styles.getstarted_button,
                        { backgroundColor: isChecked ? '#5C97FF' : '#2e4a7f' }
                    ]}
                    onPress={() => navigation.navigate('SelectLanguage')}
                    disabled={!isChecked}>
                    <Text style={styles.getstarted_text}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#10172A',
    },
    image: {
        width: Dimension.width / 1,
        height: Dimension.height / 1.6,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text_safely: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',

    },
    text_below_safely: {
        fontSize: 15,
        fontWeight: '500',
        color: '#cccccc',
        lineHeight: 23,
        marginLeft: 55,
        marginRight: 55,
        textAlign: 'center'
    },
    getstarted_button: {
        width: Dimension.width / 1.2,
        height: Dimension.height / 20,
        // backgroundColor: '#5C97FF',
        backgroundColor: "#2e4a7f",
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    getstarted_text: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
    }
})


export default Agreement