import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomInput = ({ style = {}, ...props }) => {
    const inputStyle = {
        ...styles.textInput,
        ...style
    }

    return <TextInput style={inputStyle} {...props}></TextInput>
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#E5E7EB',
        padding: 15,
        // paddingLeft: 55,
        //paddingRight: 55,
        borderRadius: 10,
        fontSize: 18,
        height: 60,
        //width: 300,
        width:'100%',
        marginVertical: 3,
        marginBottom: 15,
        color: '#1F2937',
        borderWidth: 1,
    }
})

export default CustomInput

/*
import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = () => {

    return (
        <>
            <TextInput
                style={styles.textInput}
            />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '95%',
        // margin: 20,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: 'red',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    errorText: {
        fontSize: 10,
        color: 'red',
    },
    errorInput: {
        borderColor: 'red',
    }
})

export default CustomInput

*/
