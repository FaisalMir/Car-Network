{/*  */}

import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLOURS, FONTS, SIZES } from '../constants'

const BidsInfo = (bids) => {
  return (
    <View>
      <Image 
        source={bids.image}
        resizeMode="contain"
        style={{width:48, height: 48}}
      />

      <View>
        <Text style={{
          fontFamily:FONTS.semibold,
          fontSize: SIZES.small,
          color: COLOURS.primary
        }}>
          {bids.name} placed a bid
        </Text>
      </View>
    </View>
  )
}

export default BidsInfo