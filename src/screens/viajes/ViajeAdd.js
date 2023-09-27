import React from "react"
import { View, Text, StyleSheet } from "react-native"

const ViajeAdd = () => {
    return (
        <View style={styles.container}>
            <Text>Agregar Plan de Viaje</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ViajeAdd