import { styles } from '@/styles/homepage'
import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <Link href={"/(tabs)"}>Go to Home page</Link>
      <TouchableOpacity onPress={() => {alert("Hello")}}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  )
}