import { configureStore } from "@reduxjs/toolkit";
import vpnSlice from "./vpnSlice";

const store = configureStore({
    reducer: {
        vpn: vpnSlice,
    },
});

export default store;