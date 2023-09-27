import React, { useState } from "react"
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import { useRoute } from "@react-navigation/native"
import { SelectList } from "react-native-dropdown-select-list"
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton"
import CustomInput from "../../components/CustomInput"
import FirmaScreen from "./FirmaScreen"


const ServicioDetail = () => {
    //ASI SE PASAN LOS PARÁMETROS, A TRAVES DE USEROUTE
    const {
        params: { servicio },
    } = useRoute();

    const motivos = [
        { key: '0', value: 'Condiciones Atmosféricas' },
        { key: '1', value: 'Interferencias' },
        { key: '2', value: 'Atribuibles al Cliente' },
        { key: '3', value: 'Falla del Técnico' },
        { key: '4', value: 'Falla de Materiales' },
        { key: '5', value: 'Opción 6' },
        { key: '6', value: 'Cambio Preventivo' },
        { key: '7', value: 'Sin Motivo' },
    ]

    const [selected, setSelected] = useState("");
    const navigation = useNavigation()

    const handleFirma = () => {
        navigation.navigate('FirmaScreen')
    }

    const handleElementos = () => {
        navigation.navigate('ElementosScreen')
    }

    const handleGrabar = () => {
        alert('Grabación OK')
    }

    const style = `.m-signature-pad--footer
        .button {
        background-color: red;
        color: #FFF;
    }`

    return (
        <View style={Styles.container}>
            <View>
                <Text style={Styles.textTitle}>{servicio.id}</Text>
                <Text style={Styles.textTitle}>{servicio.cliente}</Text>
                <Text style={Styles.textTitle}>{servicio.sucursal}</Text>
                <Text style={Styles.text}>{servicio.title}</Text>
                <Text style={Styles.text}>{servicio.tipoServicio}</Text>
                <Text style={Styles.text}>{servicio.date}</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text style={Styles.labelInput}>Motivo:</Text>
                <SelectList
                    setSelected={setSelected}
                    data={motivos}
                    placeholder="Seleccionar opción"
                    search={false}
                />
                <Text style={Styles.labelInput}>Detalle del Trabajo</Text>
                <CustomInput
                    style={Styles.multiLine}
                    maxLines={10}
                    multiline={true}
                    maxLength={250}
                ></CustomInput>
                <Text style={Styles.labelInput}>Elemento de Entrada-Salida</Text>
                <ScrollView style={Styles.containerElementos}>
                </ScrollView>
                <CustomButton
                    title={'Elementos'}
                    onPress={handleElementos}
                ></CustomButton>
                <Text style={Styles.labelInput}>Nombre/Apellido Personal Autorizado</Text>
                <CustomInput></CustomInput>
                <Text style={Styles.labelInput}>Legajo Personal Autorizado</Text>
                <CustomInput></CustomInput>
                <Text style={Styles.labelInput}>Cargo Personal Autorizado</Text>
                <CustomInput></CustomInput>
                <Text style={Styles.labelInput}>Firma Personal Autorizado</Text>
                
                                
                <TouchableOpacity
                    Styles={Styles.containerFirma}
                    onLongPress={handleFirma}
                >
                    <Image style={Styles.image}></Image>
                </TouchableOpacity>
                <Text style={Styles.labelInput}>Email 1</Text>
                <CustomInput></CustomInput>
                <Text style={Styles.labelInput}>Email 2</Text>
                <CustomInput></CustomInput>
                <Text style={Styles.labelInput}>Email 3</Text>


                <CustomButton
                    title={'Grabar'}
                    onPress={handleGrabar}
                ></CustomButton>
            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        justifyContent: 'flex-start',
        marginHorizontal: 16,
    },
    containerFirma: {
        marginTop: 100,
    },
    containerElementos: {
        width: '100%',
        height: 202,
        backgroundColor: '#E5E7EB',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
    },
    multiLine: {
        height: 200,
        padding: 10,
        textAlignVertical: 'top'
    },
    image: {
        width: '100%',
        height: 202,
        backgroundColor: '#fff8dc',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
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
    labelInput: {
        fontSize: 16,
        marginLeft: 2,
        marginBottom: 3,
    },
})

export default ServicioDetail