import { StyleSheet, Text, View, TextInput, ActivityIndicator, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';
import { deviceheight, devicewidth } from '../../../app/src/dimensions/Dimension';
import Icon from 'react-native-vector-icons/Ionicons';

const cities = [
    {
        name: 'Islamabad',
        image: require('../assets/images/islamabad.jpeg')
    },
    {
        name: 'Multan',
        image: require('../assets/images/multan.jpeg')
    },
    {
        name: 'Lahore',
        image: require('../assets/images/lahore.jpeg')
    },
    {
        name: 'karachi',
        image: require('../assets/images/karachi.jpeg')
    },
    {
        name: 'Faisalabad',
        image: require('../assets/images/faisalabad.jpg')
    },
];

const Home = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);
    const name = useSelector((state) => state.weather.name);
    const temp = useSelector((state) => state.weather.temp);
    const pressure = useSelector((state) => state.weather.pressure);
    const humidity = useSelector((state) => state.weather.humidity);
    const description = useSelector((state) => state.weather.description);
    const speed = useSelector((state) => state.weather.speed);
    const status = useSelector((state) => state.weather.status);
    const error = useSelector((state) => state.weather.error);

    const handleFetchWeather = () => {
        dispatch(fetchWeather(city));
    };

    const tempCelsius = temp ? (temp - 273.15).toFixed(2) : null;
    const speedKmh = speed ? (speed * 3.6).toFixed(2) : null;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <ImageBackground
                    source={require('../assets/images/background3.jpg')}
                    style={styles.backgroundImage}
                >
                    <Text style={styles.heading}>Good Morning</Text>
                    <Text style={styles.subheading}>Welcome to My WeatherApp, where we keep
                        you informed and prepared for any weather anytime, anywhere.
                    </Text>
                    <View style={styles.textInput_view}>
                        <Icon name="search" size={24} color="#fff" />
                        <TextInput
                            style={styles.input}
                            placeholder="Search City..."
                            placeholderTextColor={'#fff'}
                            value={city}
                            onChangeText={setCity}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleFetchWeather}>
                        <Text style={styles.button_text}>Get Weather</Text>
                    </TouchableOpacity>
                    {weather.status === 'loading' && <ActivityIndicator size="large" color="#0000ff" />}
                    {weather.status === 'succeeded' && (
                        <View style={styles.weatherInfo}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={styles.weatherText}>City </Text>
                                <Text style={styles.weatherText}>{name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={styles.weatherText}>Temperature </Text>
                                <Text style={styles.weatherText}>{tempCelsius} °C</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={styles.weatherText}>Pressure </Text>
                                <Text style={styles.weatherText}>{pressure} hPa</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={styles.weatherText}>Humidity </Text>
                                <Text style={styles.weatherText}>{humidity} %</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={styles.weatherText}>Description </Text>
                                <Text style={styles.weatherText}>{description}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={styles.weatherText}>Wind Speed </Text>
                                <Text style={styles.weatherText}>{speedKmh} km/h</Text>
                            </View>
                        </View>
                    )}
                    {weather.status === 'failed' && <Text>Error: {weather.error}</Text>}
                    <View style={styles.savedCitiesContainer}>
                        <Text style={styles.savedCitiesTitle}>Saved Cities</Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={cities}
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <View style={styles.imageWrapper}>
                                        <ImageBackground source={item.image} style={styles.image} />
                                    </View>
                                    <View style={styles.cardTextWrapper}>
                                        <Text style={styles.cardText}>{item.name}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
};

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    scrollContent: {
        flexGrow: 1,
    },
    backgroundImage: {
        width: devicewidth,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'white',
        fontSize: 30,
        marginVertical: 20,
        marginTop: 100,
    },
    subheading: {
        color: 'white',
        fontSize: 16,
        marginVertical: 20,
        margin: 20,
    },
    textInput_view: {
        flexDirection: 'row',
        width: devicewidth / 1.1,
        height: 40,
        borderColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 8,
        backgroundColor: 'gray',
        alignItems: 'center',
        color: 'white',
    },
    input: {
        flex: 1,
        color: 'white',
    },
    button: {
        width: devicewidth / 1.1,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    button_text: {
        color: 'black',
        fontSize: 20,
    },
    weatherInfo: {
        width: '90%',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        opacity: 0.4,
    },
    weatherText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    savedCitiesContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        marginVertical: 30,
        margin: 20,
    },
    savedCitiesTitle: {
        color: 'white',
        fontSize: 20,
        marginVertical: 10,
    },
    card: {
        width: devicewidth / 2.7,
        height: deviceheight / 3.5,
        marginRight: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageWrapper: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: devicewidth / 2.7,
        height: deviceheight / 3,
        resizeMode: 'contain',
    },
    cardTextWrapper: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
