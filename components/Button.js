import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOURS, SHADOWS, SIZES } from '../constants'
import { useLinkProps } from '@react-navigation/native'

export const CircleButton = ({imgURL, handlePress, ...props}) => {
  return (
    <TouchableOpacity

        //desigining the heart button for 
        //each of the photo cards
        style={{
            width: 40,
            height: 40,
            backgroundColor: COLOURS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props,
        }}
            onPress={handlePress}
        >
            <Image
                source={imgURL}
                resizeMode="contain"
                style={{width: 24, height:24}}
            />

    </TouchableOpacity>
  )
}

export const RectangleButton = () => {
    return (
      <View>
        <Text>Circle</Text>
      </View>
    )
  }