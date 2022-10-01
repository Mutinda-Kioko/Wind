import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const Onboarding = ({navigation}) => {
  return (
    <View>
      <Text>Onboarding</Text>
      <Pressable onPress={() => navigation.navigate("Home")}><Text>Home</Text></Pressable>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})