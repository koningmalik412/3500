import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const posts = () => {
    const params = useLocalSearchParams();

  return (
    <View>
       <Stack.Screen options={{headerTitle: `Post #${params.id}`}} />

      <Text>posts: {params.id}</Text>
    </View>
  )
}

export default posts;