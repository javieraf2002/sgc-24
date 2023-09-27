import React from 'react'
import { Text, StyleSheet, Pressable, View } from 'react-native'

const CustomButton = (props) => {
    const { onPress, title = 'Save' } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginBottom: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#2f4f4f',
    },
    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default CustomButton