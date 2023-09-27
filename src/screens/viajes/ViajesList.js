import react from "react"
import { FlatList, View, TouchableOpacity, StyleSheet, Text } from "react-native"
import { useSelector } from "react-redux"
import ViajeItem from '../../components/viajes/ViajeItem'
import { useNavigation } from "@react-navigation/native";

const ViajesList = () => {

    const navigation = useNavigation()
    const render = ({ item }) => { return <ViajeItem viaje={item} /> }
    const viajes = useSelector(state => state.viajes.viajes)
    const viajesData = viajes.filter(viaje => !viaje.isCompleted)

    const HandleAddViaje = () => {
        navigation.navigate('ViajeAdd')
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={viajesData}
                keyExtractor={item => item.id}
                renderItem={render}
            />
            <TouchableOpacity
                onPress={HandleAddViaje}
                style={styles.button}
            >
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 70, (No borrar por las dudas)
        paddingHorizontal: 15,
    },
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#2f4f4f',
        position: 'absolute',
        bottom: 15,
        right: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .5,
        shadowRadius: 5,
        elevation: 5,
    },
    plus: {
        fontSize: 40,
        color: '#fff',
        position: 'absolute',
        top: -8,
        left: 10, //11
    },
})

export default ViajesList