import { StyleSheet } from "react-native";

import {COLORS, FONT, SHADOWS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
     container: {
      flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.lightGray,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    },
    surah: {
         marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: COLORS.gray
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
    }

})

export default styles;
