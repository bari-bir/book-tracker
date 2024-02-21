import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    bookcard: {
        width: 329,
        backgroundColor: COLORS.white,
        padding: 20,
        marginBottom: 19,
        position: 'relative'
    },

    bookImage: {
        flexDirection: 'row',
        gap: 4,
        position: 'absolute',
        top: -45,
        right: -10
    }
});

export default styles;
