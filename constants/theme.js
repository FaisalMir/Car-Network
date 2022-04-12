//the code for the overall look and feel of the app
//ranging from the colours to the fonts

import { Colors } from "react-native/Libraries/NewAppScreen";



//reminder to change values
export const FONTS = {
    bold: "InterBold",
    light: "InterLight",
    medium: "InterMedium",
    regular: "InterRegular",
    semibold: "InterSemiBold",
};

export const SIZES = {
    extraLarge: 24,
    large: 18,
    medium: 16,
    font: 14,
    small: 12, 
    base: 8,
};

export const COLOURS = {
    primary: "#001F2D",
    secondary: "#4D626C",

    white: "#FFF",
    gray: "#74858C",
};

export const SHADOWS = {
    dark:
    {
        elevation: 14,
        shadowColor: COLOURS.gray,
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        shadowOffset: {
            width: 0,
            height: 7,
        },
    },
};
