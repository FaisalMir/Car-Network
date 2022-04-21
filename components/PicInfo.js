{/*this file contains details for the Information.js file.
   The styling for the title, subtitle, price, bid timer and
  handles how the image should look like.*/}

import { View, Text, Image } from 'react-native'
import React from 'react'

//importing the files needed from the constants folder
import { SIZES, FONTS, COLOURS, SHADOWS, assets } from '../constants'

//handles the styling and look of the title and subtitle of the picture
//provides the font size, style, the colour
export const PicTitle = ({title, subTitle, subTitleSize, titleSize}) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semibold,
        fontSize: titleSize,
        color: COLOURS.primary
      }}>{title}</Text>
      <Text style={{
        fontFamily: FONTS.medium,
        fontSize: subTitleSize,
        color: COLOURS.primary
      }}>{subTitle}</Text>
    </View>
  )
}

//handles importing the logo for the dollar sign 
//and imports the price from PhotoData.js and sets
//the font size, colour and font type
export const Price = ({price}) => {
return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Text>Current price: </Text>
      <Image 
        source={assets.dollar}
        resizeMode= "contain"
        style={{
          width: 12,
          height: 12,
          marginRight: 1
        }}
      />
      <Text style={{
        color: COLOURS.primary,
        fontFamily: FONTS.medium,
        fontSize: SIZES.font
      }}>
        {price}
      </Text>
    </View>
 )
}

//handles the image and the size of it for the screen
export const ImageCmp = (imgURL, index) => {
return (
    <Image
      source={imgURL}
      resizeMode = "contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0?0 : -SIZES.font
      }}
    />
    )
}

//contains the styling of the bid timer
export const BidEnd = () => {
    return (
    //the styling for when the timer
    //for when the bid ends
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLOURS.white,  
      elevation: 1,
      maxWidth: '50%',
      ...SHADOWS.light
    }}>
        {/*The text style and font for 
          the timer */}
        <Text style={{
          color: COLOURS.primary,
          fontFamily: FONTS.regular, 
          fontSize: SIZES.small
        }}>
          Ending in
        </Text>

        {/*The text style and font for 
          the timer */}
        <Text style={{
          color: COLOURS.primary,
          fontFamily: FONTS.semibold, 
          fontSize: SIZES.medium
        }}>
          4h 26m
        </Text>
    </View>
    )
}

//the styling provided for the information 
//about the picture such as the title and subtitle
export const PicInfo = () => {
    return (
    <View style={{
        flexDirection:"row",
        justifyContent: 'space-between',
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge
    }}>
        <BidEnd />
    </View>
    )
}

  