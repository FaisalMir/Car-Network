{/*  */}

import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react';

import { Price, PicTitle } from './PicInfo';
import { COLOURS, SIZES, FONTS, PhotoData} from '../constants';
const InfoDes = ({data}) => {
  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <PicTitle 
          title={data.name}
          subTitle={data.creator}
          subTitleSize={SIZES.font}
          titleSize={SIZES.extraLarge}
        />

        <Price price = {data.price} />
      </View>
      <View style={{
        marginVertical: SIZES.extraLarge *1.4
      }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semibold,
          color:COLOURS.primary
        }}>
          Information
        </Text>
        <View style={{
          marginTop: SIZES.base
        }}>
          <Text style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.regular,
          color:COLOURS.secondary,
          lineHeight: SIZES.large
        }}> {data.description}</Text>
        </View>

      </View>
    </>
  )
}

export default InfoDes