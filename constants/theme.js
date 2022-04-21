{/*the code for the overall look and feel of the app
ranging from the colours to the fonts. This file enables
the usage of constants and promotes reusability of functions
for better efficiency and better readability of code */}

import { Colors } from "react-native/Libraries/NewAppScreen";

//all the fonts to be used in the app and their templates
export const FONTS = {
    bold: "InterBold",
    light: "InterLight",
    medium: "InterMedium",
    regular: "InterRegular",
    semibold: "InterSemiBold",
};

//the sizes of any texts and images
export const SIZES = {
    extraLarge: 22,
    large: 16,
    medium: 14,
    font: 12,
    small: 10, 
    base: 7,
};

//the colours to be used in the app
export const COLOURS = {
    primary: "#2f4f4f",
    secondary: "#4D626C",

    white: "#FFF",
    gray: "#74858C",
};

//the shadow effects in the app
export const SHADOWS = {
    light: {
      shadowColor: COLOURS.gray,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
  
      elevation: 3,
    },
    medium: {
      shadowColor: COLOURS.gray,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.26,
      shadowRadius: 4.87,
  
      elevation: 8,
    },
    dark: {
      shadowColor: COLOURS.gray,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.40,
      shadowRadius: 9.06,
  
      elevation: 12,
    },
};
