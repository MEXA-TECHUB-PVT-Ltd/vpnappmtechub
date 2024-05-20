import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Countries = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Countries</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10172A',
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
})

export default Countries