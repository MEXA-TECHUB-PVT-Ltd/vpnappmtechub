import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const OPENWEATHER_API_KEY = 'b40a107a5981ee3aabc937338c1d78c5';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`);
        console.log(response.data);
        return response.data;
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: null,
        name: '',
        temp: null,
        pressure: null,
        humidity: null,
        description: null,
        speed: null,
        status: 'idle',
        error: null,
       
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.name = action.payload.name;
                state.temp = action.payload.main.temp,
                state.pressure = action.payload.main.pressure;
                state.humidity = action.payload.main.humidity;
                state.description = action.payload.weather[0].description;
                state.speed = action.payload.wind.speed;

                
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default weatherSlice.reducer;