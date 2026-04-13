import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signIn = () => {
  return (
    <View>
      <Text>sign_in</Text>
      <Link href="/(auth)/sign-up" className='mt-4 rounded-md text-white bg-black'>Sign Up</Link>
    </View>
  )
}

export default signIn