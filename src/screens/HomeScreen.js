import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import CustomButton from "../components/CustomButton"
import { logoutUsuarioReducer } from "../redux/UsuarioSlice";
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logoutUsuarioReducer())
        navigation.navigate('Login')
    }

    const HandleServicios = () => {
        navigation.navigate('StackServicios')
    }

    const HandleViajes = () => {
        navigation.navigate('StackViajes')
    }

    const HandlePresupuestos = () => {
        navigation.navigate('StackPresupuestos')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.textHeader}>Pantalla Principal</Text>
                <Image
                    source={require('../../assets/img/star2x1.bmp')}
                    resizeMode="cover"
                    style={styles.logoHeader}
                ></Image>
            </View>
            <View>
                <CustomButton title={'Pedidos de Servicio'} onPress={HandleServicios} />
                <CustomButton title={'Planes de Viaje'} onPress={HandleViajes} />
                <CustomButton title={'Reparación Vehicular'} onPress={HandlePresupuestos} />
                <CustomButton title={'Cerrar Sesión'} onPress={logOut} />
            </View>
            <View style={styles.containerFooter}>
                <Image
                    source={require('../../assets/img/1092483.png')}
                    resizeMode="stretch"
                    style={styles.logoFooter}
                ></Image>
                <Text>Sistema de Gestión - Movil</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
    },
    containerHeader: {
        alignItems: 'center',
    },
    containerFooter: {
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    logoHeader: {
        marginVertical: 20,
        width: 300,
        height: 75,

    },
    logoFooter: {
        // marginVertical: 20,
        width: 38,
        height: 38,
        backgroundColor: 'transparent',
        //borderRadius: 50,
        marginBottom: 10,
    }
})

export default HomeScreen

