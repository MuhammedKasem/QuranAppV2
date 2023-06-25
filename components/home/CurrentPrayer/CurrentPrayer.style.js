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
        backgroundColor: COLORS.lightGray,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },
    date: {
            fontFamily: FONT.medium,
        fontSize: SIZES.xLarge,
        color: COLORS.lightWhite
    },
    currentPrayer: {
           fontFamily: FONT.medium,
        fontSize: SIZES.large,
        color: COLORS.lightWhite
    },
    prayerName: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
        color: COLORS.green
    },
    prayer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    }
});

export default styles;
