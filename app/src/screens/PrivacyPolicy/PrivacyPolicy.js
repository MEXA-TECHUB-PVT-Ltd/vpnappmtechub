import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';
import { ScrollView } from 'react-native-gesture-handler';

const PrivacyPolicy = ({ navigation }) => {
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
                <Text style={styles.header_text}>Privacy Policy</Text>
            </View>
            <View style={styles.logo_view}>
                <Image
                    source={Images.vpnlogo1}
                    style={styles.image}
                />
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.scrolltext_view}>
                <Text style={styles.scroll_text}>
                    The personal information that you are asked to provide,
                    and the reasons why you are asked to provide it,
                    will be made clear to you at the point we ask you to
                    provide your personal information.
                    If you contact us directly, we may receive additional
                    information about you such as your name, email address,
                    phone number, the contents of the message and/or
                    attachments you may send us, and any other information
                    you may choose to provide.
                    When you register for an Account, we may ask for
                    your contact information, including items such as name,
                    company name, address, email address, and telephone number.
                    Like any other website, mtechub llc uses 'cookies'.
                    These cookies are used to store information including
                    visitors' preferences, and the pages on the website
                    that the visitor accessed or visited.
                    The information is used to optimize the users'
                    experience by customizing our web page content
                    based on visitors' browser type and/or other information.
                    You may consult this list to find the Privacy
                    Policy for each of the advertising partners of mtechub llc.
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10172A',
        // justifyContent: 'center',
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
        marginLeft: 90,
    },
    logo_view: {
        backgroundColor: 'transparent',
    },
    image: {
        width: Dimension.width / 2.5,
        height: Dimension.height / 10,
        resizeMode: 'contain',
    },
    scrolltext_view: {
        backgroundColor: 'transparent',
        width: Dimension.width / 1.15,

    },
    scroll_text: {
        color: '#dedfe1',
        opacity: 86,
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 28,
    },
})

export default PrivacyPolicy