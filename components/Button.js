import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOURS, FONTS, SHADOWS, SIZES } from '../constants'
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

export const RectangleButton = ({minWidth, fontSize, handlePress, ...props}) => {
    return (
      <TouchableOpacity

      //desigining the button for 
      //going to the page for placing
      //a bid
      style={{
          backgroundColor: COLOURS.primary,
          borderRadius: SIZES.extraLarge,
          minWidth: minWidth,
          padding: SIZES.small,
          ...props,
      }}
          onPress={handlePress}
      >
      <Text style={{
        fontFamily: FONTS.semibold,
        fontSize: fontSize,
        color: COLOURS.white,
        textAlign: 'center'
      }}>
        Place a bid here
      </Text>

  </TouchableOpacity>
    )
  }