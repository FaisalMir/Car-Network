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
  BidsInfo } from '../components';


const Information = ({navigation, route}) => {
  
  const {data} = route.params;
  console.log()

  return (
   <Text>Information</Text> 
  )
}

export default Information