{/*This is the screen when the user wants to see more info about
  about the print and what it is about. Half of the top part of the
  screen is taken by the picture and it displays the title of the
  print, who created it, the story behind it and it gives the user
  the option to place a bid.  */}

import {
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  StatusBar, 
  FlatList} from 'react-native';

//importing the files needed from the constants folder
import { 
  COLOURS, 
  SIZES, 
  SHADOWS, 
  FONTS, 
  assets } from '../constants';
  
//importing the files needed from the components folder
import { 
  CircleButton, 
  RectangleButton, 
  PicInfo, FocusedStatusBar, 
  InfoDes, 
  BidsInfo, 
  HomeHeader} from '../components';

import React from 'react';

//takes data and navigation as its parameters
const HeaderDetails = ({data, navigation}) => (
  <View style={{
    width: '100%',
    height: 373
  }}>
    <Image 
      source={data.image}
      resizeMode="cover"
      style={{width:'100%', height: '100%'}}
    />

    {/*importing and desiging the back button that 
      is going to be at the top left of the screen */}
    <CircleButton 
      imgURL={assets.back}
      handlePress={() => navigation.goBack()}
      left={15}
      top = {StatusBar.currentHeight+5}
    />

    {/*importing and desiging the heart button that
      is going to be at the top right of the screen */}
    <CircleButton 
      imgURL={assets.heart}
      right={15}
      top = {StatusBar.currentHeight+5}
    />

  </View>
)
//takes navigation and route as its parameters
const Information = ({navigation, route}) => {
  
  const {data} = route.params;

  return (

   <SafeAreaView style={{
     flex: 1
   }}>
     {/*this is to have the top bar
        where all the battery and notifications
        on the phone are to be transparent */}
     <FocusedStatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent={true}
     />

     <View style={{
       //having the button to place a bid
       //to be lower down the screen so
       //that the user has a easier time 
       //pressing it
       width: '100%',
       position: 'absolute',
       bottom: 0,
       paddingVertical: SIZES.font,
       justifyContent: 'center',
       alignItems: 'center',
       zIndex: 1,
       backgroundColor: 'rgba(255,255,255,0.5)'
     }}>
       {/*creating the rectangle button itself
          for placing bids */}
       <RectangleButton 
          minWidth={170}
          fontSize={SIZES.font}   
          {...SHADOWS.dark}    
       />
     </View>

    {/*The Flatlist is being used to display all the
      information about the posting. Such as the title,
      bid timer, description of the print. */}
     <FlatList 
      data={data.bids}
      renderItem={
        ({item}) => <BidsInfo bids={item}/>
      }
      //hides the vertical scroll when the page moves up or down
      showsVerticalScrollIndicator={false}

      //contains all the information about the picture
      ListHeaderComponent={() => (
        <React.Fragment>
          <HeaderDetails data={data} navigation={navigation} />
          <PicInfo />
          <View style={{
            padding: SIZES.font
          }}>
            {/*calling the description of the image to be viewed */}
            <InfoDes data={data} />
          </View>
        </React.Fragment>
      )}
      //the item.id specifies that it will be a unique
      //identifer for each element
      keyExtractor={(item) => item.id}
      contentContainerStyle={{paddingBottom: SIZES.extraLarge*3}}

     />
   </SafeAreaView>
  )
}

export default Information