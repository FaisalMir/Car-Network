{/*This file contains the two buttons being used in the app:
  CircleButton and RectangleButton. These buttons are then exported
  to be used elsewhere in the application */}

import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOURS, FONTS, SHADOWS, SIZES } from '../constants'
import { useLinkProps } from '@react-navigation/native'

{/*the circle button in the app is being designed to be used for cases 
  such as the back button being a circle and the ability to like a picture
  to be round in nature */}
export const CircleButton = ({imgURL, handlePress, ...props}) => {
  return (
    <TouchableOpacity

        //desigining the heart button for 
        //each of the photo cards
        style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLOURS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            ...SHADOWS.light,
            ...props,
        }}
            onPress={handlePress}
        >
            {/*calling the image source for the 
              like icon */}
            <Image
                source={imgURL}
                resizeMode="contain"
                style={{width: 24, height:24}}
            />

    </TouchableOpacity>
  )
}

//desiging the button that is going to allow users to place a bid
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
      {/*the text characteristics of the button being
        designed */}
      <Text style={{
        fontFamily: FONTS.semibold,
        fontSize: fontSize,
        color: COLOURS.white,
        textAlign: 'center'
      }}>
        Place a bid
      </Text>

  </TouchableOpacity>
    )
  }