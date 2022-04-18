import {
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  StatusBar, 
  FlatList} from 'react-native';

import { 
  COLOURS, 
  SIZES, 
  SHADOWS, 
  FONTS, 
  assets } from '../constants';
  
import { 
  CircleButton, 
  RectangleButton, 
  PicInfo, FocusedStatusBar, 
  InfoDes, 
  BidsInfo, 
  HomeHeader} from '../components';
import React from 'react';

const HeaderDetails = ({data, navigation}) => (
  <View style={{
    width: '100%',
    height: 373
  }}>
    <Image 
      source={assets.car1}
      resizeMode="cover"
      style={{width:'100%', height: '100%'}}
    />

    {/*importing and desiging the back button */}
    <CircleButton 
      imgURL={assets.back}
      handlePress={() => navigation.goBack()}
      left={15}
      top = {StatusBar.currentHeight+5}
    />

    {/*importing and desiging the heart button */}
    <CircleButton 
      imgURL={assets.heart}
      right={15}
      top = {StatusBar.currentHeight+5}
    />

  </View>
)
const Information = ({navigation, route}) => {
  
  const {data} = route.params;

  return (
   <SafeAreaView style={{
     flex: 1
   }}>
     <FocusedStatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent={true}
     />

     <View style={{
       //having the button to place a bid
       //to be lower down the screen
       width: '100%',
       position: 'absolute',
       bottom: 0,
       paddingVertical: SIZES.font,
       justifyContent: 'center',
       alignItems: 'center',
       zIndex: 1,
       backgroundColor: 'rgba(255,255,255,0.5)'
     }}>
       <RectangleButton 
          minWidth={170}
          fontSize={SIZES.font}   
          {...SHADOWS.dark}    
       />
     </View>

     <FlatList 
      data={data.bids}
      renderItem={
        ({item}) => <BidsInfo bids={item}/>
      }
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <React.Fragment>
          <HeaderDetails data={data} navigation={navigation} />
          <PicInfo />
          <View style={{
            padding: SIZES.font
          }}>
            <InfoDes data={data} />

          </View>
        </React.Fragment>
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{paddingBottom: SIZES.extraLarge*3}}

     />
   </SafeAreaView>
  )
}

export default Information