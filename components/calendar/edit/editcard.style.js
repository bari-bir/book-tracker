import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";


export const styles = StyleSheet.create({
    editCard: {
        backgroundColor: '#005479',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        position: 'relative',
        marginBottom: 11
    },

    editTitle: {
        fontSize: 20,
        fontWeight: 700,
        color: COLORS.white,
        marginBottom: 10,
    },
    
    editSubtitle: {
        fontSize: 14,
        color: COLORS.white,
        marginBottom: 8
    },

    editDate: {
        fontSize: 10,
        fontWeight: 700,
        color: COLORS.white,
    },

    editDateFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 

    editImage: {
        position: 'absolute',
        top: 10,
        right: 20,   
    }
})