import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import Images from '../../consts/Images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Dimension from '../../consts/Dimension';
import CheckBox from '@react-native-community/checkbox';
import PopUpSuccessful from '../../components/PopUpSuccessful/PopUpSuccessful';

const SubscriptionBottomSheet = ({visible, onClose}) => {
    if (!visible) {
        return null;
    }

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
        <Modal
            animationType="slide"
            transparent={true}
        >
            <View style={styles.bottomSheetContainer}>
                <View style={styles.modal_view}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Image
                            source={Images.crossicon}
                            style={styles.closeIcon} />
                    </TouchableOpacity>
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
                                        tintColors={{ true: '#3078ef', false: 'white' }}
                                    />
                                </View>
                            </View>
                            <View style={[styles.rectangle_view, isChecked2 && styles.selectedBorder]}>
                                <Text style={styles.rectangle_text}>$ 79.00/- Month</Text>
                                <View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginLeft: 10, justifyContent: 'flex-end' }}>
                                    <CheckBox
                                        value={isChecked2}
                                        onValueChange={handleCheck2}
                                        tintColors={{ true: '#3078ef', false: 'white' }}
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
                    {isModalVisible && (
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={isModalVisible}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalContent}>
                                    <Text style={styles.modalText}>Confirm Your In-App Purchase</Text>
                                    <Text style={styles.modalText_price}>Do you want to buy one No More Ads for 9.99 $?</Text>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                                            <Text style={styles.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modalButton} onPress={handleBuy}>
                                            <Text style={styles.buttonText}>Buy</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    )}
                </View>
                <PopUpSuccessful successMessage="Subscription paid Successfully!" visible={isPopupVisible} />

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
        height: hp('78%'),
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
        fontWeight: '600'
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
    subscriptionIcon_view: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subscriptionicon: {
        width: wp('50%'),
        height: hp('15%'),
        resizeMode: 'contain'
    },
    premium_texts: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    premium: {
        fontSize: 22,
        fontWeight: '700',
        color: 'white',
        lineHeight: 33,
    },
    upgrade: {
        fontSize: 14,
        fontWeight: '400',
        color: '#CCCCCC',
        lineHeight: 20,
    },
    features_view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    feature_image: {
        width: wp('4%'),
        height: hp('4%'),
        resizeMode: 'contain',
    },
    image_text_view: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: wp('50%'),
        backgroundColor: 'transparent',
        marginVertical: 1,
    },
    feature_text: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFFFFF',
        marginLeft: 10,
    },
    plans_view: {
        marginVertical: 15,
    },
    rectangle_view: {
        flexDirection: 'row',
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'lightgray',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        width: wp('80%'),
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
    modalButton: {},
    buttonText: {
        color: '#007bff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SubscriptionBottomSheet;
