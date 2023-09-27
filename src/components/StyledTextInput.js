import React from "react";
import { TextInput, StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.secondary,
        padding: 15,
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 5,
        fontSize: 16,
        height: 60,
        width: 300,
        marginVertical: 3,
        marginBottom: 15,
        color: colors.tertiary,
    }
})

const StyledTextInput = ({ style = {}, ...props }) => {
    const inputStyle = {
        ...styles.textInput,
        ...style
    }

    return <TextInput style={inputStyle} {...props}></TextInput>
}

export default StyledTextInput