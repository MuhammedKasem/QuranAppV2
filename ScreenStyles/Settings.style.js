import { StyleSheet } from "react-native";

import {COLORS, FONT, SHADOWS, SIZES} from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: SIZES.medium,
        alignItems: "center",
        flexDirection: "column",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: COLORS.lightGray,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
        gap: 10,
    },
    optionName: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.green,
        alignSelf: "center"

    },
    optionContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        color: COLORS.green
    },
    optionPicker: {
        width: "100%",
    },
    pickerName: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.green,

    },
    settingsTxt: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xxLarge,
        color: COLORS.lightWhite,
        padding: SIZES.medium,
    }

})

export default styles;