import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'

import { COLOURS, FONTS, SIZES, assets } from '../constants'
const HomeHeader = ({onSearch}) => {
  return (
    <View style={{
      backgroundColor: COLOURS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image 
          source={assets.logo}
          resizeMode= "contain"
          style={{
            width: 90,
            height: 25
          }}
        />
        <View style={{
          width: 45,
          height: 45
        }}>
          <Image 
            source={assets.person01}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </View>
      </View>

       {/* creating the css for greeting the user
            into the app via their name and the apps
            catchphrase */}      
      <View style={{
        marginVertical: SIZES.font
      }}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLOURS.white
        }}>
          Hello, Faisal
        </Text>
        <Text style={{
          fontFamily: FONTS.semibold,
          fontSize: SIZES.medium,
          color: COLOURS.white,
          marginTop: SIZES.base/2
        }}>
          Browse our set of prints
        </Text>
      </View>

      {/* creating the feature for searching
          titles in the app */}   
      <View style={{
        marginTop: SIZES.font
      }}>
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLOURS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small -2
        }}>

          <TextInput
            placeholder='Search Prints'
            style={{flex:1}}
            //Scans through the titles to match
            //the users input
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader