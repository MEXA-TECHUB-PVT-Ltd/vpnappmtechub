import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementElapsedTime } from '../redux/vpnSlice';

const TimerManager = () => {
    const dispatch = useDispatch();
    const connected = useSelector(state => state.vpn.connected);

    useEffect(() => {
        let timer;
        if (connected) {
            timer = setInterval(() => {
                dispatch(incrementElapsedTime());
            }, 1000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [connected, dispatch]);

    return null;
};

export default TimerManager;