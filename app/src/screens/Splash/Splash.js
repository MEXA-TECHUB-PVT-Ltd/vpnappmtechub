import { View, Text, StyleSheet, Image, Animated } from 'react-native'
import React, {useEffect, useRef, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Images from '../../consts/Images';
import Dimension from '../../consts/Dimension';
import * as Progress from 'react-native-progress';

const Splash = () => { 
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Agreement');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <View style={styles.container}>
        <Image
        source={Images.vpnlogo}
        style={styles.logo}
        />
          
          <Progress.Bar 
          progress={0.3} 
          width={200} 
          animated={true}
          style={styles.progressbar}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#10172A'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    logo: {
        width: Dimension.width/3.5,
        height: Dimension.height/5.8,
    },
    progressbar: {
        // marginVertical: 30,
    },
})

export default Splash