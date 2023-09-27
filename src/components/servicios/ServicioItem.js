import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native"
import moment from "moment/moment"
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import ServicioDetail from "../../screens/servicios/ServicioDetail"

const ServicioItem = ({
    servicio
}) => {
    const { navigate } = useNavigation();
    console.log(servicio);
    return (
        <TouchableOpacity
            onPress={()=>{navigate('ServicioDetail', {servicio})}}
        >
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={styles.textTitle}>{servicio.title}</Text>
                        <Text style={styles.text}>{servicio.tipoServicio}</Text>
                        <Text style={styles.text}>{servicio.date}</Text>
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

export default ServicioItem