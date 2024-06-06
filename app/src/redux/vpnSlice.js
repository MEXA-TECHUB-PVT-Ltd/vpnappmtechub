import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    connected: false,
    connecting: false, 
    elapsedTime: 0,
    dataAmount: '5.9 GBs',
    statusText: 'Not Connected',
};

const vpnSlice = createSlice({
    name: 'vpn',
    initialState,
    reducers: {
        connect(state) {
            state.connected = true;
            state.connecting = false;
            state.statusText = 'Connected';
        },
        disconnect(state) {
            state.connected = false;
            state.statusText = 'Not Connected';
            if (state.timerInterval) {
                clearInterval(state.timerInterval);
                state.timerInterval = null;
            }
        },
        setConnecting(state) {
            state.connecting = true;
            state.statusText = 'Connecting';
        },
        incrementElapsedTime(state) {
            state.elapsedTime += 1;
        },
        
        setDataAmount(state, action) {
            state.dataAmount = action.payload;
        },
        resetElapsedTime(state) {
            state.elapsedTime = 0;
        },
    },
});

export const { connect, disconnect, setConnecting, elapsedTime,
     setDataAmount, resetElapsedTime, incrementElapsedTime } = vpnSlice.actions;
export default vpnSlice.reducer;