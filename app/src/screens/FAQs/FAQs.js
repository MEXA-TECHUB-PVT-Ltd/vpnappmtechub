import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FAQs = ({ navigation }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const animations = useRef([
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0)
    ]).current;

    const toggleExpand = (index) => {
        if (expandedIndex === index) {
            // Collapse the currently expanded item
            Animated.timing(animations[index], {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start(() => {
                setExpandedIndex(null);
            });
        } else {
            // Collapse the currently expanded item
            if (expandedIndex !== null) {
                Animated.timing(animations[expandedIndex], {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            }

            // Expand the new item
            Animated.timing(animations[index], {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start();

            setExpandedIndex(index);
        }
    };

    const renderFAQItem = (index, title, contentText) => {
        const heightInterpolation = animations[index].interpolate({
            inputRange: [0, 1],
            outputRange: [hp('8%'), hp('19%')]
        });

        const rotateIcon = animations[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });

        return (
            <Animated.View key={index} style={[styles.rectangle_view, { height: heightInterpolation }]}>
                <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.header_view}>
                    <View style={styles.text_view}>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                    <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
                        <Icon name="keyboard-arrow-down" size={30} color="white" />
                    </Animated.View>
                </TouchableOpacity>
                {expandedIndex === index && (
                    <View style={styles.bottom_view}>
                        <View style={styles.line_view} />
                        <View style={styles.bottom_text_view}>
                            <Text style={styles.contentText}>
                                {contentText}
                            </Text>
                        </View>
                    </View>
                )}
            </Animated.View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.gobackicon} style={styles.back_icon} />
                </TouchableOpacity>
                <Text style={styles.header_text}>FAQs</Text>
            </View>
            {renderFAQItem(0, 'Is my internet connection secure with your VPN app?', 'Yes, Your internet connection is highly secure with our VPN app.')}
            {renderFAQItem(1, 'Can I access geo-blocked content using your VPN?', 'Yes, our VPN allows you to bypass geo-blocks and access content from anywhere in the world.')}
            {renderFAQItem(2, 'How many devices can i connect simultaneously with your VPN?', 'You can connect multiple devices simultaneously with our VPN service.')}
            {renderFAQItem(3, 'Do you keep logs of my online activity?', 'No, we have a strict no-logs policy to ensure your privacy is protected.')}
            {renderFAQItem(4, 'How fast is your VPN connection for streaming and downloading?', 'Our VPN offers fast and reliable VPN speeds, ideal for streaming and downloading without any logs.')}
            {renderFAQItem(5, 'Can i use your VPN on my mobile device?', 'Yes, our VPN is compatible with mobile devices for on-the-go security and privacy.')}
            {renderFAQItem(6, 'Does your VPN offer a kill switch feature?', 'Yes, our VPN includes a kill switch feature to ensure your internet connection is never exposed, even if the VPN connection drops unexpectedly.')}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10172A',
        alignItems: 'center',
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
        marginLeft: 120,
    },
    rectangle_view: {
        width: wp('85%'),
        backgroundColor: '#262A41',
        borderRadius: 14,
        overflow: 'hidden',
        marginVertical: 3,
    },
    header_view: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,
    },
    text_view: {
        width: wp('72%'),
        paddingRight: 20,
    },
    headerText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 15,
        color: 'white',
    },
    bottom_view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    line_view: {
        width: '92%',
        height: 1.5,
        backgroundColor: 'gray',
        marginBottom: 8,
    },
    bottom_text_view: {
        width: wp('79.3%'),
        backgroundColor: 'transparent'
    },
    contentText: {
        fontSize: 12.5,
        fontWeight: '400',
        lineHeight: 18,
        color: 'white',
    },
});

export default FAQs;
