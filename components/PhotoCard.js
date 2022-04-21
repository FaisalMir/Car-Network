{/*This file contains all the style for the listings. How each
  of the listing is supposed to look, the border, size, calling the
  image, the ability to like an image, the bid timer, the title,
  price and being able to place a bid.  */}

import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

//importing the files needed from Button.js
import { CircleButton, RectangleButton } from './Button';

//importing the files needed from the constants folder
import { COLOURS, SIZES, SHADOWS, assets} from '../constants';

//importing the files needed from PicInfo.js
import { PicTitle, Price, PicInfo } from './PicInfo';

const PhotoCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={{
      //this styling is what the photocard 
      //should look like like the colour,
      //font, font size.
      backgroundColor: COLOURS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge, 
      margin: SIZES.base, 
      ...SHADOWS.dark}}>
      <View style={{width: "100%", height: 250}}>
        <Image
          //due to an unknown error, the program is not
          //able to see the image files in PhotoData.js
          //The code for calling all the information in at once is:
          // source = {data.image}
          //which would then pull all the required data from PhotoData.js
          //but instead I am manually calling it in

          //edit: it has been fixed now
          source={data.image}

          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font
          }}
          />
          {/*adding the button to like a image. it will be at
            every listing at the top right corner */}
          <CircleButton imgURL={assets.heart} right={8} top={8} />
      </View>

      <PicInfo />

      <View style={{
        width: "100%",
        padding: SIZES.font
      }}>

        {/*using the informaton from PicIfo.js,
          the title and the subtitle are being created
          to be displayed in the listings */}
        <PicTitle
          title={data.title}
          subTitle={data.creator}
          subTitleSize={SIZES.small}
          titleSize={SIZES.large}
        />
        <View style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: 'center'
        }}>
        </View>
        <Price price={data.price}/>
        
        {/*creating the bid button at each of the
          listings which when pressed takes the user
          to the Information.js file screen */}
        <RectangleButton 
          minWidth={120}
          fontSize={SIZES.font}
          //Navigating to the next page where the information
          //about the picture is available
          handlePress={() => navigation.navigate("Information", {data})}
        />

      </View>
    </View>
  )
}

export default PhotoCard;