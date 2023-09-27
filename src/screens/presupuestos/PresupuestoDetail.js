import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useRoute } from "@react-navigation/native";

const PresupuestoDetail = () => {
    const {
        params: { presupuesto },
    } = useRoute();
    return (
        <View>
            <Text>Detalle del Presupuesto</Text>
            <Text>{presupuesto.title}</Text>
            <Text>{presupuesto.date}</Text>
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

export default PresupuestoDetail