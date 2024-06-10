import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image, TouchableOpacity, Switch, ScrollView, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';

const app = [
    { name: 'Use Vpn for 220 Apps', appIcon: Images.vpnsolologo },
    { name: 'Zoom', appIcon: Images.zoomicon },
    { name: 'Netflix', appIcon: Images.netflixicon },
    { name: 'Google +', appIcon: Images.googleicon },
    { name: 'Snapchat', appIcon: Images.snapchaticon },
    { name: 'TikTok', appIcon: Images.tiktokicon },
    { name: 'Facebook', appIcon: Images.facebookicon },
    { name: 'Instagram', appIcon: Images.instagramicon },
    { name: 'Tinder', appIcon: Images.tindericon },
    { name: 'Twitter', appIcon: Images.twittericon },
    { name: 'WhatsApp', appIcon: Images.whatsappicon },
    { name: 'Spotify', appIcon: Images.spotifyicon },
    { name: 'Google +', appIcon: Images.googleicon },
    { name: 'Snapchat', appIcon: Images.snapchaticon },
    { name: 'TikTok', appIcon: Images.tiktokicon },
    { name: 'Facebook', appIcon: Images.facebookicon },
    { name: 'Instagram', appIcon: Images.instagramicon },
];

const totalApps = app.length - 1;

const ListItem = ({ app, index, switchState, onToggleSwitch }) => {
    return (
        <View style={styles.rectangle_view}>
            {app.appIcon && (
                <View style={styles.icon_view}>
                    <Image source={app.appIcon} style={styles.app_icon} />
                </View>
            )}
            <View style={styles.texts_view}>
                <Text style={styles.rectangle_text}>{app.name}</Text>
            </View>
            <View style={styles.switchView}>
                <Switch
                    trackColor={{ false: 'gray', true: '#267CFF' }}
                    thumbColor={switchState ? 'white' : '#f4f3f4'}
                    onValueChange={() => onToggleSwitch(index)}
                    value={switchState}
                    style={{ transform: [{ scale: 1 }] }}
                />
            </View>
        </View>
    );
};

const FilterApps = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [switchStates, setSwitchStates] = useState(Array(app.length).fill(false));
    const [vpnChecked, setVpnChecked] = useState(false);
    const [individualStates, setIndividualStates] = useState(Array(app.length).fill(false));

    //start animated bars code
    const animationValues = [
        useRef(new Animated.Value(0)).current,
        useRef(new Animated.Value(0)).current,
        useRef(new Animated.Value(0)).current
    ];

    useEffect(() => {
        if (loading) {
            animateBars();
        }
    }, [loading]);

    const animateBars = () => {
        const animations = animationValues.map((anim, index) => {
            return Animated.sequence([
                Animated.delay(index * 400),
                Animated.timing(anim, {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(anim, {
                    toValue: 2,
                    duration: 250,
                    useNativeDriver: true,
                })
            ]);
        });

        Animated.loop(Animated.parallel(animations)).start();
    };
//end animated bars code


    useFocusEffect(
        React.useCallback(() => {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 3000);

            return () => clearTimeout(timer);
        }, [])
    );

    const toggleSwitch = (index) => {
        if (index === 0) {
            const newVpnChecked = !vpnChecked;
            setVpnChecked(newVpnChecked);

            if (newVpnChecked) {
                setIndividualStates([...switchStates]);
                setSwitchStates(Array(app.length).fill(true));
            } else {
                setSwitchStates([...individualStates]);
            }
        } else {
            const newSwitchStates = [...switchStates];
            newSwitchStates[index] = !newSwitchStates[index];
            setSwitchStates(newSwitchStates);

            if (vpnChecked) {
                const newIndividualStates = [...individualStates];
                newIndividualStates[index] = !individualStates[index];
                setIndividualStates(newIndividualStates);
            }
        }
    };

    app[0].name = `Use Vpn for ${totalApps} Apps`;

    return (
        <View style={styles.container}>
            <View style={styles.header_view}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.gobackicon} style={styles.back_icon} />
                </TouchableOpacity>
                <Text style={styles.header_text}>Filter Apps</Text>
            </View>
            {loading ? (
                <View style={styles.loading_container}>
                    <Image source={Images.connectingicon} style={styles.connecting_icon} />
                    <View style={styles.animationContainer}>
                        {animationValues.map((anim, index) => (
                            <Animated.View key={index} style={[styles.bar, { opacity: anim }]} />
                        ))}
                    </View>
                    <Text style={styles.loadingText}>Hang tight, we are loading your apps...</Text>
                </View>
            ) : (
                <View style={styles.list_view}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollViewContent}
                    >
                        {app.map((app, index) => (
                            <ListItem
                                key={index}
                                app={app}
                                index={index}
                                switchState={switchStates[index]}
                                onToggleSwitch={toggleSwitch}
                            />
                        ))}
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#10172A',
    },
    header_view: {
        backgroundColor: 'transparent',
        height: hp('8%'),
        width: wp('90%'),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
    },
    back_icon: {
        width: Dimension.width / 18,
        height: Dimension.height / 18,
        marginRight: 100,
    },
    header_text: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: 'white',
    },
    list_view: {
        flex: 1,
        width: '90%',
        backgroundColor: 'transparent',
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
    icon_view: {
        width: 30,
        height: 30,
        marginLeft: 10,
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
    switchView: {
        marginRight: 10,
    },
    app_icon: {
        width: 30,
        height: 30,
    },
    scrollViewContent: {
        paddingBottom: 10,
    },
    loading_container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animationContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    connecting_icon: {
        marginTop: 30,
        width: wp('10.5%'),
        height: hp('5'),
    },
    bar: {
        width: 7,
        height: 40,
        borderRadius: 50,
        marginHorizontal: 4,
        backgroundColor: 'white',
    },
});

export default FilterApps;
