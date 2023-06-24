import { StyleSheet } from "react-native";

import {COLORS, FONT, SHADOWS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        padding: SIZES.small,
        gap: 10,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },
    surahNameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: COLORS.gray,
        borderBottomWidth: 2,
    },
    surahName: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.primary,
        alignSelf: "center"

    },
    arabicName: {
        fontFamily: FONT.kitabBold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    engTranslation: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.secondary
    },
    arabicTxt: {
        fontSize: SIZES.xLarge,
        fontFamily: FONT.kitabBold,
        textAlign: "right"
    },
    cardNameContainer: {
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    logImage: {
        width: "70%",
        height: "70%",
    },
    textContainer: {
        marginHorizontal: SIZES.medium,
        gap: 10,
    },
    cardTitle: {
        fontSize: SIZES.xLarge,
        fontFamily: "DMBold",
        color: COLORS.primary,
    },
    jobType: {
        fontSize: SIZES.small + 2,
        fontFamily: "DMRegular",
        color: COLORS.gray,
        marginTop: 3,
        textTransform: "capitalize",
    },
    footer: {
        flexDirection: "row",
        padding: SIZES.small,
        backgroundColor: "#FFF",
        justifyContent: "space-between",
        gap: 10
    },
    refreshBtn: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: COLORS.green,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    playBtn: {
        flex: 1,
        height: 55,
        backgroundColor: COLORS.green,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SIZES.medium,
        borderRadius: SIZES.medium,
    },
    playBtnTxt: {
      fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    fontFamily: FONT.bold,
    }

});

export default styles;