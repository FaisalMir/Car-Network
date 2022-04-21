{/*This is the screen when the user first opens the app. At the very
    top of the screen is the logo for the app. Below that, the user is greeted
    by their app and it displayes the apps catchphrase: "Browse our set of prints".
    
  This screen shows all the auctions that are currently active. It displays the image,
    title, the creator, the time remaining before the bid is over, how much it is, and
    the ability to place a bid which takes the user to the Information.js screen.   */}

import {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';

//importing the files needed from the constants folder
import {COLOURS, PhotoData} from "../constants";

//importing the files needed from the components folder
import {HomeHeader, PhotoCard, FocusedStatusBar} from "../components";

const HomeScreen = () => {

  return (
    <SafeAreaView style={{flex: 1}}>

      {/*this is to have the top bar
        where all the battery and notifications
        on the phone to be black in colour */}
      <FocusedStatusBar background={COLOURS.primary} />

      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList 
            data={PhotoData}
            renderItem={({item}) => <PhotoCard data={item} />}

            //the item.id specifies that it will be a unique
            //identifer for each element
            keyExtractor={(item) => item.id}

            //hides the scrollbar that would appear when moving
            //the page up or down
            showsVerticalScrollIndicator={false}

            //specifies header component to render at the top of any
            //and all items
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
          <View style={{height: 300, backgroundColor: COLOURS.primary}} />
          <View style={{flex: 1, backgroundColor: COLOURS.white}} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;