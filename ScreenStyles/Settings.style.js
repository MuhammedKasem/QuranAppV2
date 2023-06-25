import { StyleSheet } from "react-native";

import {COLORS, FONT, SHADOWS, SIZES} from "../constants";

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
    optionName: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.green,
        alignSelf: "center"

    },

})

export default styles;