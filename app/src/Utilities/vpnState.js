import { NativeEventEmitter } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let vpnStatus = 'disconnected';
let elapsedTime = 0;
let timerInterval;

const vpnEventEmitter = new NativeEventEmitter();

const loadVpnStatus = async () => {
    try {
        const savedStatus = await AsyncStorage.getItem('vpnStatus');
        if (savedStatus !== null) {
            vpnStatus = savedStatus;
        }
    } catch (error) {
        console.error('Failed to load VPN status', error);
    }
};

const getVpnStatus = () => {
    return vpnStatus;
};

const startTimer = () => {
    timerInterval = setInterval(() => {
        elapsedTime++;
    }, 1000);
};

const stopTimer = () => {
    clearInterval(timerInterval);
    vpnEventEmitter.emit('timerStopped', elapsedTime);
    elapsedTime = 0;
};

const updateVpnStatus = async (status) => {
    try {
        vpnStatus = status;
        await AsyncStorage.setItem('vpnStatus', status);
        if (status === 'connected') {
            startTimer();
        } else {
            stopTimer();
        }
        vpnEventEmitter.emit('vpnStatusChanged', status);
    } catch (error) {
        console.error('Failed to update VPN status', error);
    }
};

// Load VPN status when the module is first imported
loadVpnStatus();

export { getVpnStatus, updateVpnStatus, vpnEventEmitter };
