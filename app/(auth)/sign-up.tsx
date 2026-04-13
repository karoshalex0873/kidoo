import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/(auth)/sign_in" className='mt-4 rounded-md text-white bg-black'>Sign In</Link>
    </View>
  )
}

export default signUp