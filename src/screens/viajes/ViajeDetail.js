import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useRoute } from "@react-navigation/native";

const ViajeDetail = () => {
    const {
        params: { viaje },
    } = useRoute();
    return (
        <View>
            <Text>Detalle del Viaje</Text>
            <Text>{viaje.title}</Text>
            <Text>{viaje.date}</Text>
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

export default ViajeDetail