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
    backgroundColor: "#FFF",
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
         fontFamily: FONT.medium,
        fontSize: SIZES.medium,
        color: COLORS.green
    },
    englishTranslation: {
        fontFamily: FONT.medium,
        fontSize: SIZES.medium,
        color: COLORS.secondary
    },
    arabicName: {
         fontFamily: FONT.kitabBold,
        fontSize: SIZES.xLarge,
        color: COLORS.green
    }

})

export default styles;
