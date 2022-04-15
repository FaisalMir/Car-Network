import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import car1 from '../assets/images/car1.jpg';
import car2 from '../assets/images/car2.jpg';

import { CircleButton, RectangleButton } from './Button';
import { COLOURS, SIZES, SHADOWS, assets } from '../constants';
import { PicTitle, Price, PicInfo } from './PicInfo';

const PhotoCard = (data) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLOURS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge, 
      margin: SIZES.base, 
      ...SHADOWS.dark}}>
      <View style={{width: "100%", height: 250}}>
        <Image
          source={car1}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font
          }}
          />

          <CircleButton imgURL={assets.heart} right={10} top={10} />
      </View>

      <PicInfo />
    </View>
  )
}

export default PhotoCard;