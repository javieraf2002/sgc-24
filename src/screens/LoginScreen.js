import React from "react"
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native"
import { Formik, useField } from "formik"
import colors from "../constants/colors"
import StyledTextInput from "../components/StyledTextInput"
import { loginValidationSchema } from "../validationsSchema/login"
import { useDispatch } from 'react-redux'
import { loginUsuarioReducer } from "../redux/UsuarioSlice"
import { useNavigation } from "@react-navigation/native"
import CustomButton from "../components/CustomButton"

const LoginScreen = () => {
    
    const dispatch = useDispatch()
    const Navigation = useNavigation()
    
    const loginUsuario = (values) => {
        dispatch(loginUsuarioReducer(values))
        Navigation.navigate('Home')
    }

    const initialValues = {
        email: '',
        password: '',
    }

    const FormikInputValue = ({ name, ...props }) => {
        const [field, meta, helpers] = useField(name)
        return (
            <>
                <StyledTextInput
                    value={field.value}
                    onChangeText={value => helpers.setValue(value)}
                    {...props}
                />
                {meta.error && <Text style={styles.error}>{meta.error}</Text>}
            </>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    source={require('../../assets/img/star2x1.bmp')}
                    resizeMode="cover"
                    style={styles.logo}
                ></Image>
                <Text style={styles.title}>Sistema de Gestión.</Text>
                <Text style={styles.subTitle}>Cuenta de Ingreso.</Text>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={initialValues}
                    onSubmit={(values, {resetForm}) => {
                        loginUsuario(values)
                        resetForm({values: ''})
                    }}
                >
                    {({ handleSubmit }) => {
                        return (
                            <View style={styles.innerContainer}>
                                <FormikInputValue
                                    name='email'
                                    placeholder="Correo"
                                />
                                <FormikInputValue
                                    name='password'
                                    placeholder="Clave"
                                    secureTextEntry
                                />
                                <CustomButton
                                    style={styles.button}
                                    title="Ingresar"
                                    onPress={handleSubmit}
                                />
                            </View>
                        )
                    }}
                </Formik>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: colors.primary,
    },
    innerContainer: {
        flex: 1,
        with: '100%',
        alignItems: 'center',
    },
    logo: {
        marginTop: 100,
        width: 300,
        height: 75,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.secondary,
        padding: 10,
    },
    subTitle: {
        fontSize: 18,
        marginTop: 25,
        marginBottom: 20,
        letterSpacing: 1,
        fontWeight: 'bold',
        color: colors.tertiary,
    },
    // View
    formArea: {
        width: '90%',
    },
    //Text
    inputLabel: {
        color: colors.tertiary,
        fontSize: 13,
        textAlign: 'left',

    },
    //View
    leftIcon: {
        left: 15,
        top: 38,
        position: 'absolute',
        zIndex: 1,
    },
    //TouchableOpacity
    RightIcon: {
        left: 15,
        top: 38,
        position: 'absolute',
        zIndex: 1,
    },
    //TouchableOpacity
    button: {
        padding: 15,
        backgroundColor: 'colors.brand',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 5,
        height: 60,
    },
    //Text
    buttontext: {
        color: colors.primary,
        fontSize: 16,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    },
    form: {
        margin: 12
    }
});

export default LoginScreen