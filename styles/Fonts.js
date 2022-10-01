import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // app dimensions
  width: width,
  height: height,
};

export const FONTS = {
  // Main Title
  TITLE: {
    fontFamily: "Electro-Shackle",
    fontSize: hp("5.911%"),
    lineHeight: hp("6.896%"),
  },
  // Headers
  heading1: {
    fontFamily: "Electro-Shackle",
    fontSize:hp("3.941%"),
    lineHeight:hp("4.926%"),
  },
  heading2: {
    fontFamily: "Electro-Shackle",
    fontSize: hp("2.955%"),
    lineHeight: hp("3.941%"),
  },
  heading3: {
    fontFamily: "Lato-Bold",
    fontSize: hp("2.463%"),
    lineHeight:hp("3.941%"),
  },
  heading4: {
    fontFamily: "Lato-Bold",
    fontSize: hp("2.217%"),
    lineHeight:hp("2.955%"),
  },
  heading5: {
    fontFamily: "Lato-Bold",
    fontSize: hp("1.9704%"),
    lineHeight:hp("2.955%"),
  },
  heading6: {
    fontFamily: "Lato-Bold",
    fontSize: hp("1.7241%"),
    lineHeight:hp("2.955%"),
  },
  bodyHighlight: {
    fontFamily: "Lato-Black",
    fontSize: hp("1.478%"),
    lineHeight:hp("1.9704%"),
  },
  bodyRegular: {
    fontFamily: "Lato-Regular",
    fontSize: hp("1.478%"),
    lineHeight:hp("1.9704%"),
  },
  bodySmall: {
    fontFamily: "Lato-Light",
    fontSize: hp("1.232%"),
    lineHeight:hp("1.9704%"),
  },
};

const appFont = { SIZES, FONTS };

export default appFont;