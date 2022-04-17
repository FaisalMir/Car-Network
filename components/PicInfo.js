import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLOURS, SHADOWS, assets } from '../constants'
export const PicTitle = ({title, subTitle, subTitleSize, titleSize}) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semibold,
        fontSize: titleSize,
        color: COLOURS.primary
      }}>{title}</Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLOURS.primary
      }}>{subTitle}</Text>
    </View>
  )
}

export const Price = ({price}) => {
return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Image 
        source={assets.dollar}
        resizeMode= "contain"
        style={{
          width: 20,
          height: 20,
          marginRight: 2
        }}
      />
      <Text style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLOURS.primary
      }}>
      </Text>
    </View>
 )
}

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

export const BidEnd = () => {
    return (
    <View style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLOURS.white,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: '50%'

    }}>
        <Text style={{
          fontFamily: FONTS.regular, 
          fontSize: SIZES.small, 
          color: COLOURS.primary
        }}>
          Ending in
        </Text>
        <Text style={{
          fontFamily: FONTS.semibold, 
          fontSize: SIZES.medium, 
          color: COLOURS.primary
        }}>
          4h 26m
        </Text>
    </View>
    )
}

export const PicInfo = () => {
    return (
    <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection:"row",
        justifyContent: 'space-between'
    }}>
        <BidEnd />
    </View>
    )
}

  