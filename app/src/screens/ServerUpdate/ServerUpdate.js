import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useEffect, useRef } from 'react';
import Images from '../../consts/Images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Dimension from '../../consts/Dimension';
import BottomSheet from '../BottomSheet/BottomSheet';

const ServerUpdate = ({ navigation }) => {
    const [connected, setConnected] = useState(false);
    const [statusText, setStatusText] = useState('Not Connected');
    const [connecting, setConnecting] = useState(false);
    const [dataAmount, setDataAmount] = useState('5.6 GBs');
    const [savedElapsedTime, setSavedElapsedTime] = useState();
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);


    const [openBottomSheet, setOpenBottomSheet] = useState(false);
    const animationValues = [useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current, useRef(new Animated.Value(0)).current];

    useEffect(() => {
        if (connecting) {
            animateBars();
        }
    }, [connecting]);

    useEffect(() => {
        if (connected) {
            intervalRef.current = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [connected]);

    const formatElapsedTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs < 10 ? '0' : ''}${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

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

    const handlePress = () => {
        if (!connected) {
            setConnecting(true);
            setStatusText('Connecting');
            setTimeout(() => {
                setConnected(true);
                setConnecting(false);
                setStatusText('Connected');
            }, 2000);
        } else {
            setConnected(false);
            setStatusText('Not Connected');
            setSavedElapsedTime(elapsedTime);
            setElapsedTime(0);
        }
    };

    const openSheet = () => {
        setOpenBottomSheet(true);
    };

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
                      Connect now for optimized browzing.</Text>
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

                <TouchableOpacity
                    style={[styles.button,
                    connected ? styles.connected_background :
                        connecting ? styles.connecting_background :
                            styles.disconnected_background]}
                    onPress={() => {
                        handlePress();
                        if (connected) {
                            openSheet();
                        }
                    }}

                >
                    <Image
                        source={connected ? Images.buttondisconnectedicon :
                            connecting ? Images.connectingicon :
                                Images.buttonpowericon}
                        style={[styles.power_button,
                        connected ? styles.disconnected_icon :
                            connecting ? styles.connecting_icon :
                                styles.power_icon]}
                    />
                    {!connecting && (
                        connected ? (
                            <View style={styles.button_text_container}>
                                <Text style={styles.button_text_line}>TAP TO</Text>
                                <Text style={styles.button_text_line}>DISCONNECT</Text>
                            </View>
                        ) : (
                            <Text style={styles.button_text}>
                                TAP TO CONNECT
                            </Text>
                        )
                    )}
                    {connecting && (
                        <View style={styles.animationContainer}>
                            {animationValues.map((anim, index) => (
                                <Animated.View key={index} style={[styles.bar, { opacity: anim }]} />
                            ))}
                        </View>
                    )}

                </TouchableOpacity>
                <View style={styles.status_view}>
                    <Text style={styles.status_text}>Status : </Text>
                    <Text style={[styles.connected_disconnected_text,
                    connecting ? styles.connecting_text :
                        connected ? styles.connected_text :
                            styles.notconnected_text
                    ]}>
                        {statusText}
                    </Text>
                </View>

                {connected && (
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
                )}

            </View>

            <BottomSheet
                visible={openBottomSheet}
                dataAmount={dataAmount}
                elapsedTime={savedElapsedTime}
                onClose={() => setOpenBottomSheet(false)}
            />
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
    button: {
        width: wp('36%'),
        height: hp('18%'),
        position: 'relative',
        backgroundColor: '#10172A',
        borderWidth: 5,
        borderColor: '#3D83FF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    connected_background: {
        backgroundColor: '#236DDF',
    },
    connecting_background: {
        backgroundColor: '#236DDF',
    },
    disconnected_background: {
        backgroundColor: '#10172A',

    },
    status_view: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    status_text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',

    },
    connected_disconnected_text: {
        color: 'red',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 5,
    },
    connected_text: {
        color: 'green'
    },
    connecting_text: {
        color: '#f7d459',
    },
    notconnected_text: {
        color: 'red'
    },
    power_button: {
        width: wp('9.3%'),
        height: hp('5.1%'),
    },
    disconnected_icon: {
        width: wp('10.4%'),
        height: hp('5%'),
    },
    button_text_container: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: -10,
    },
    button_text_line: {
        lineHeight: 16,
        marginVertical: 0,
        paddingVertical: 0,
        marginBottom: 0,
        fontSize: 12,
        fontWeight: '600',
    },
    button_text: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 18,
        marginTop: 16,
    },
    ads_view: {
        backgroundColor: '#424262',
        height: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_ads: {
        fontSize: 20,
        fontWeight: 'bold',
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
    bar: {
        width: 7,
        height: 40,
        borderRadius: 50,
        marginHorizontal: 4,
        backgroundColor: 'white',
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
})

export default ServerUpdate