import { StyleSheet } from "react-native";

import {COLORS, FONT, SHADOWS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
     container: {
      flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.black,
    },
    surah: {
         marginBottom: 10,
        borderRadius: 10,
        paddingBottom: 0,
        padding: 12,
        backgroundColor: COLORS.lightGray,
        borderWidth: 1,
        borderColor: COLORS.black,
    },
    surahName: {
         flexDirection: "row",
        justifyContent: "space-between",
        color: COLORS.green
    },
    englishName: {
         fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.green
    },
    englishTranslation: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.lightWhite,
        marginBottom: 20
    },
    arabicName: {
         fontFamily: FONT.kitabBold,
        fontSize: SIZES.xLarge,
        color: COLORS.green
    },
    headerText: {
        fontFamily: FONT.kitabBold,
        fontSize: SIZES.xLarge,
        color: COLORS.green,
        textAlign: "center"
    },
    quranListWrapper: {
         flex: 1,
         flexDirection: "column",
        gap: 10,
    }

})

export default styles;
