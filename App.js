import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import Information from './screens/Information';
import {useFonts} from 'expo-font';

//creating an instance of Stack
const Stack = createStackNavigator();
//the theme of the app
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}
const App = () => {

  //loading fonts into the app from the assets folder
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  //if fonts are not loaded then it will continue 
  if(!loaded)
    return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOption={{ headerShown: false}}
      initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Information" component={Information}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

