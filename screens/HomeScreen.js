import {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';

import {COLOURS, PhotoData} from "../constants";
import {HomeHeader, PhotoCard, FocusedStatusBar} from "../components";

const HomeScreen = () => {
  
  const [PhotoData, setPhotoData] = useState(PhotoData);
  const handleSearch = (value) => {
    if(!value.length) return setPhotoData(PhotoData);

    const dataFilter = PhotoData.filter;
  }



  return (
    <SafeAreaView style={{flex: 1}}>

      <FocusedStatusBar background={COLOURS.primary} />
      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList 
            data={PhotoData}
            renderItem={({item}) => <PhotoCard data={item} />}

            //the item.id specifies that it will be a unique
            //identifer for each element
            keyExtractor={(item) => item.id}

            //hides the scrollbar 
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