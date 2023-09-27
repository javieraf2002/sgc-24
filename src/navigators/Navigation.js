import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//STACKS
import StackServicios from "./StackServicios"
import StackViajes from "./StackViajes"
import StackPresupuestos from "./StackPresupuestos"

// ICONOS
import { FontAwesome5 } from '@expo/vector-icons'

import LoginScreen from "../screens/LoginScreen"
import HomeScreen from "../screens/HomeScreen"

const Stack = createNativeStackNavigator()

const StackPrincipal = (() => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}
                options={{
                    headerShown: false
                }}
            ></Stack.Screen>
            <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false
                }}
            ></Stack.Screen>
            <Stack.Screen name="StackViajes" component={StackViajes}
                options={{
                    headerShown: false
                }}
            ></Stack.Screen>
            <Stack.Screen name="StackServicios" component={StackServicios}
                options={{
                    headerShown: false
                }}
            ></Stack.Screen>
            <Stack.Screen name="StackPresupuestos" component={StackPresupuestos}
                options={{
                    headerShown: false
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
})

//NAVEGACIÓN PRINCIPALy

const Navigation = () => {
    return (
        <NavigationContainer>
            <StackPrincipal></StackPrincipal>
        </NavigationContainer>
    )
}

export default Navigation