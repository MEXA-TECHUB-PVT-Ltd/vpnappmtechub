import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import PopUpSuccessful from '../../components/PopUpSuccessful/PopUpSuccessful';

const Subscription = ({ navigation, route }) => {
    const { previousScreen } = route.params;
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleBuy = () => {
        setPopupVisible(true);
        setModalVisible(false);
        setTimeout(() => setPopupVisible(false), 2000);
    };

    const handleCheck1 = () => {
        setIsChecked1(true);
        setIsChecked2(false);
    };

    const handleCheck2 = () => {
        setIsChecked1(false);
        setIsChecked2(true);
    };
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
            </View>
            <View style={styles.subscriptionIcon_view}>
                <Image
                    source={Images.subscriptioniconlarge}
                    style={styles.subscriptionicon}
                />
            </View>
            <View style={styles.premium_texts}>
                <Text style={styles.premium}>Get Premium</Text>
                <Text style={styles.upgrade}>Upgrade to Premium to enjoy more features</Text>
            </View>
            <View style={styles.features_view}>
                <View style={styles.image_text_view}>
                    <Image
                        source={Images.globalicon}
                        style={styles.feature_image}
                    />
                    <Text style={styles.feature_text}>All Global Services</Text>
                </View>
                <View style={styles.image_text_view}>
                    <Image
                        source={Images.connectivityicon}
                        style={styles.feature_image}
                    />
                    <Text style={styles.feature_text}>Maintain Connectivity</Text>
                </View>
                <View style={styles.image_text_view}>
                    <Image
                        source={Images.serversicon}
                        style={styles.feature_image}
                    />
                    <Text style={styles.feature_text}>All 10+ Servers for VIP</Text>
                </View>
                <View style={styles.image_text_view}>
                    <Image
                        source={Images.adsfreeicon}
                        style={styles.feature_image}
                    />
                    <Text style={styles.feature_text}>ADS Free Services</Text>
                </View>
                <View style={styles.plans_view}>
                    <View style={[styles.rectangle_view, isChecked1 && styles.selectedBorder]}>
                        <Text style={styles.rectangle_text}>$ 59.00/- Month</Text>
                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginLeft: 10, justifyContent: 'flex-end' }}>
                            <CheckBox
                                value={isChecked1}
                                onValueChange={handleCheck1}
                            />
                        </View>
                    </View>
                    <View style={[styles.rectangle_view, isChecked2 && styles.selectedBorder]}>
                        <Text style={styles.rectangle_text}>$ 79.00/- Month</Text>
                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginLeft: 10, justifyContent: 'flex-end' }}>
                            <CheckBox
                                value={isChecked2}
                                onValueChange={handleCheck2}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={[
                        styles.getstarted_button,
                        { backgroundColor: (isChecked1 || isChecked2) ? '#5C97FF' : '#2e4a7f' }
                    ]}
                    onPress={toggleModal}
                    disabled={!(isChecked1 || isChecked2)}>
                    <Text style={styles.getstarted_text}>Upgrade to Premium</Text>
                </TouchableOpacity>
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Confirm Your In-App Purchase</Text>
                    <Text style={styles.modalText_price}>Do you want to buy one No More Ads for 9,99 $?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={handleBuy}>
                            <Text style={styles.buttonText}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <PopUpSuccessful successMessage="Subscription paid Successfully!" visible={isPopupVisible} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10172A',
    },
    header: {
        backgroundColor: 'transparent',
        width: wp('100%'),
        height: hp('10%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    back_icon: {
        width: Dimension.width / 18,
        height: Dimension.height / 18,
        marginLeft: 25,
    },
    subscriptionIcon_view: {
        width: wp('100%'),
        height: hp('14%'),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subscriptionicon: {
        width: wp('50%'),
        height: hp('20%'),
        resizeMode: 'contain'
    },
    premium_texts: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    premium: {
        fontSize: 27,
        fontWeight: '700',
        color: 'white',
        lineHeight: 40,
    },
    upgrade: {
        fontSize: 15,
        fontWeight: '400',
        color: '#CCCCCC',
        lineHeight: 30,
    },
    features_view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    image_text_view: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: wp('50%'),
        backgroundColor: 'transparent',
        marginVertical: 3,
    },
    feature_image: {
        width: wp('5%'),
        height: hp('5%'),
        resizeMode: 'contain',
    },
    feature_text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF',
        marginLeft: 10,
    },
    plans_view: {
        marginVertical: 20,
    },
    rectangle_view: {
        flexDirection: 'row',
        marginVertical: 3,
        width: wp('85%'),
        height: hp('6.5%'),
        backgroundColor: '#262A41',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    rectangle_text: {
        color: '#FFFFFF',
        marginLeft: 16,
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 21,
    },
    getstarted_button: {
        width: Dimension.width / 1.2,
        height: Dimension.height / 20,
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
    },
    selectedBorder: {
        borderColor: '#5C97FF',
        borderWidth: 1,
    },

    modalContent: {
        backgroundColor: 'lightgray',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        margin: 16,

    },
    modalText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
        marginVertical: 10,
    },
    modalText_price: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 12,
        textAlign: 'center',

    },
    buttonContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 10,
    },
    modalButton: {

    },
    buttonText: {
        color: '#007bff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Subscription