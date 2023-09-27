import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native";

const PresupuestoItem = ({
    presupuesto
}) => {
    const { navigate } = useNavigation();
    console.log(presupuesto);
    return (
        <TouchableOpacity
            onPress={()=>{navigate('PresupuestoDetail', {presupuesto})}}
        >
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={styles.textTitle}>{presupuesto.title}</Text>
                        <Text style={styles.text}>{presupuesto.date}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#737373'
    },
    time: {
        fontSize: 13,
        color: '#a3a3a3',
        fontWeight: '500'
    }
})

export default PresupuestoItem