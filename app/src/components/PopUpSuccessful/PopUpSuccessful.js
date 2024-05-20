import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react';
import Dimension from '../../consts/Dimension';
import Images from '../../consts/Images';

const PopUpSuccessful = ({ successMessage }) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.green_view}>
                <Image
                    source={Images.like}
                    style={styles.image}>
                </Image>
                <Text style={styles.text}>{successMessage}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    image: {
        width: Dimension.width / 10,
        height: Dimension.height / 22,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    green_view: {
        flexDirection: 'row',
        width: Dimension.width / 1.1,
        height: Dimension.height / 16,
        marginVertical: 40,
        backgroundColor: '#26BD5A',
        alignItems: 'center',
        borderRadius: 11,
        justifyContent: 'space-evenly'
    },
})

export default PopUpSuccessful