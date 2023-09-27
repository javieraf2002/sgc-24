import React from "react"
import { View, Text, StyleSheet } from "react-native"

const PresupuestoAdd = () => {
    return (
        <View style={styles.container}>
            <Text>Agregar Presupuesto</Text>
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

export default PresupuestoAdd