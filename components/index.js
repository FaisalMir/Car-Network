{/*this .js file is importing all the variable and constants in the
    components folder so that it can be used in other files. Doing it 
    this way promotes reusability in the code */}

import HomeHeader from "./HomeHeader";
import PhotoCard from "./PhotoCard";
import FocusedStatusBar from "./FocusedStatusBar";
import { PicInfo } from "./PicInfo";
import BidsInfo from "./BidsInfo";
import InfoDes from "./InfoDes";
import { CircleButton, RectangleButton } from "./Button";

export {
    HomeHeader, 
    PhotoCard, 
    FocusedStatusBar,
    PicInfo,
    BidsInfo,
    InfoDes, 
    CircleButton, 
    RectangleButton};