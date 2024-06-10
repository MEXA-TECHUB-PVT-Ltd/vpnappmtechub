import React, { useState, useCallback, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Dimension from '../../consts/Dimension';
import Images from '../../consts/Images';

const LiveChat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);

    const keywordResponses = {
        myvpnisnotworking: "Make sure your mobile data is on.",
        hello: "Hello! How can I assist you today?",
        help: "Sure, I'm here to help! What do you need assistance with?",
        problem: "I'm sorry to hear you're facing a problem. Can you describe it in more detail?",
        price: "Our prices vary depending on the service. Could you specify which service you're interested in?",
        thank: "You're welcome! Is there anything else I can assist you with?",
        subscription: "Our subscription plans include monthly, quarterly, and annual options. Which one are you interested in?",
        speed: "Our VPN ensures high-speed connections. If you're experiencing slow speeds, try switching to a different server.",
        server: "We have servers in multiple countries. You can switch servers from the app settings.",
        refund: "For refund requests, please contact our support team with your order details.",
        setup: "To set up the VPN, download our app, sign in, and follow the on-screen instructions.",
        support: "You can reach our support team 24/7 through the live chat or email.",
        compatibility: "Our VPN is compatible with Windows, macOS, Android, and iOS.",
        security: "Our VPN uses AES-256 encryption to ensure your data is secure.",
        trial: "We offer a 7-day free trial for new users. Sign up to get started.",
        disconnect: "If you're experiencing frequent disconnections, try restarting the app or switching to a different server.",
        privacy: "We have a strict no-logs policy to ensure your privacy.",
        devices: "You can use our VPN on up to 5 devices simultaneously.",
        payment: "We accept various payment methods including credit cards, PayPal, and cryptocurrencies.",
        location: "You can choose from our list of server locations to connect to a specific country.",
        account: "Manage your account settings and subscription from the 'Account' section in the app.",
        update: "Make sure you have the latest version of the app for the best performance.",
        premiumplan: "Our premium plan offers additional features such as dedicated servers and priority support. Upgrade now for the ultimate VPN experience.",
        freetrial: "Yes, we offer a free trial for new users. Sign up now to experience our VPN risk-free for 7 days.",
        freepaid: "We offer both free and paid plans. The free plan includes limited features and server options, while the paid plans offer unlimited access to all features and servers.",
        howareyou: "I'm here to assist you with any questions or issues you have regarding our VPN service. How can I help you today?",
        speedtest: "You can perform a speed test within the app to check the performance of different servers and choose the fastest one.",
        bypassgeo: "Our VPN allows you to bypass geographical restrictions and access content from anywhere in the world.",
        killswitch: "We have a kill switch feature that automatically disconnects your internet connection if the VPN connection drops, ensuring your data remains secure.",
        bandwidth: "Our VPN offers unlimited bandwidth, so you can stream, download, and browse without any restrictions.",
        anonymity: "Using our VPN, your IP address is masked, providing you with anonymity and protecting your online identity.",
        troubleshoot: "If you're experiencing issues with the VPN, try restarting your device or reinstalling the app. If the problem persists, contact our support team for further assistance.",
    };

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hi! How can I help you?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((newMessages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
        const userMessage = newMessages[0].text.toLowerCase();
        const userWords = userMessage.split(/\s+/);
        let responseText = "";

        for (let i = 0; i < userWords.length; i++) {
            const compoundWord = userWords.slice(i).join('');
            if (keywordResponses[compoundWord]) {
                responseText = keywordResponses[compoundWord];
                break;
            }
        }

        if (!responseText) {
            userWords.forEach(word => {
                if (keywordResponses[word]) {
                    responseText = keywordResponses[word];
                    return;
                }
            });
        }

        if (responseText) {
            setTimeout(() => {
                const botResponse = {
                    _id: Math.round(Math.random() * 1000000),
                    text: responseText,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Support Bot',
                        avatar: 'https://placeimg.com/140/140/tech',
                    },
                };
                setMessages(previousMessages => GiftedChat.append(previousMessages, botResponse));
            }, 1000);
        }
    }, [keywordResponses]);

    return (
        <View style={styles.container}>
            <View style={styles.header_view}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.gobackicon} style={styles.back_icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.chat_view}>
                <Image source={Images.vpnlogo} style={styles.chat_icon} />
            </View>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10172A',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    header_view: {
        backgroundColor: 'transparent',
        height: hp('8%'),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
    },
    back_icon: {
        width: Dimension.width / 18,
        height: Dimension.height / 18,
        marginLeft: 30,
    },
    chat_view: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    chat_icon: {
        width: wp('22%'),
        height: hp('14%'),
    },
});

export default LiveChat;