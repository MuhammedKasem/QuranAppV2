import { StyleSheet } from "react-native";

import {COLORS, FONT, SHADOWS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },
    surahNameContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
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
        alignSelf: "center"
    },
    engTranslation: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.secondary
    },
    arabicTxt: {
        fontSize: SIZES.xLarge,
        fontFamily: FONT.kitabBold
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
        flex: 1,
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
});

export default styles;
