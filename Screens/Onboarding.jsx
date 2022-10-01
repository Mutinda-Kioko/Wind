import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FONTS } from '../styles/Fonts';
import COLORS from '../styles/Colors';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.mainView}>
    <Text style={styles.title}>TITLE</Text>
    <Text style={styles.heading1}>HEADING1</Text>
    <Text style={styles.heading2}>HEADING2</Text>
    <Text style={styles.heading3}>HEADING3</Text>
    <Text style={styles.heading4}>HEADING4</Text>
    <Text style={styles.heading5}>HEADING5</Text>
    <Text style={styles.heading6}>HEADING6</Text>
    <Text style={styles.bodyHighlight}>BODYHIGHLIGHT</Text>
    <Text style={styles.bodyRegular}>BODYREGULAR</Text>
    <Text style={styles.bodySmall}>BODYSMALL</Text>
    <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>
        Home
        </Text>
    </Pressable>
  </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    mainView:{flex: 1, justifyContent: "center", alignItems: "center"},
    title:{         ...FONTS.TITLE,
        color:COLORS.primary},
    heading1:{
        ...FONTS.heading1,
        color:COLORS.primary
    },
    heading2:{
        ...FONTS.heading2,
        color:COLORS.primary
    },
    heading3:{
        ...FONTS.heading3,
        color:COLORS.secondary
    },
    heading4:{
        ...FONTS.heading4,
        color:COLORS.additionalBlue
    },
    heading5:{
        ...FONTS.heading5,
        color:COLORS.additionalGrey
    },
    heading6:{
        ...FONTS.heading6,
        color:COLORS.success
    },
    bodyHighlight:{
        ...FONTS.bodyHighlight,
        color:COLORS.primary
    },
    bodyRegular:{
        ...FONTS.bodyRegular,
        color:COLORS.primary
    },
    bodySmall:{
        ...FONTS.bodySmall,
        color:COLORS.error
    },
})