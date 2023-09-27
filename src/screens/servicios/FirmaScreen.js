import React, { useState, useRef } from "react";
import { StyleSheet, View, Image, StatusBar, Text, Button } from "react-native";
import Signature from "react-native-signature-canvas";

const FirmaScreen = () => {
    const ref = useRef();

    const handleOK = (signature) => {
        console.log(signature);
    };

    const handleClear = () => {

    };

    const handleConfirm = () => {
        console.log("end");
    };

    const style = `.m-signature-pad--footer
    .button {
    background-color: red;
    color: #FFF;
    }`;

    const style2 = `.m-signature-pad--footer {display: none; margin: 0px;}`;


    return (

        <View style={styles.container}>
            <Signature onOK={handleOK} webStyle={style} />
            <View style={styles.row}>
                <Button title="   Borra   " onPress={handleClear} />
                <Button title=" Confirmar " onPress={handleConfirm} />
            </View>
        </View>

        /*         <View style={styles.container}>
            <Signature
                onOK={handleOK}
                onEmpty={handleEmpty}
                descriptionText="Sign"
                clearText="Limpiar"
                confirmText="Grabar"
                webStyle={style}
                autoClear={true}
            />
        </View>
 */    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
    },
    preview: {
        backgroundColor: "#c6c3c3",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 20,
        height: '90%'
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    },
});

export default FirmaScreen