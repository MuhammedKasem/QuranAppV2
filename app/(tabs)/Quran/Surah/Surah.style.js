import { StyleSheet } from "react-native";

import {COLORS, FONT, SHADOWS, SIZES} from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        margin: SIZES.large,
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
        alignSelf: "center",
        width: "80%",
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
        marginBottom: 22

    },
    arabicName: {
        fontFamily: FONT.uthmani,
        fontSize: SIZES.xxLarge,
        color: COLORS.green,
        textAlign: "right"
    },
    playBtn: {
        width: "100%",
        height: 40,
        borderRadius: SIZES.small,
        backgroundColor: COLORS.green,
        justifyContent: "center",
    },
    buttonTxt: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.white,
        textAlign: "center",
        justifyContent: "center",
    }

})

export default styles;