import { Platform, StyleSheet } from "react-native";
import { corlors } from "../constants/colors";
import { fontFamilies } from "../constants/fontFamilies";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: corlors.bgColor,
        padding: 20,
        paddingTop: Platform.OS === 'ios' ? 42 :32
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 16,
    },
     text: {
        fontSize: 14,
        fontFamily: fontFamilies.regular,
        color: corlors.text,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    section: {
        marginBottom: 16
    },
    description: {
        fontSize: 16,
        color: '#e6e6e6',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#3b82f6',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },

    inputContainer: {
        backgroundColor: corlors.gray,
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 10,
    }
});