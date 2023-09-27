import { DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//SCREENS
import ViajesList from '../screens/viajes/ViajesList'
import ViajeDetail from '../screens/viajes/ViajeDetail'
import ViajeAdd from '../screens/viajes/ViajeAdd'

const Stack = createNativeStackNavigator()

const StackViajes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ViajesList" component={ViajesList}
                options={{
                    title:'Pedidos de Viaje',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>
            <Stack.Screen name="ViajeDetail" component={ViajeDetail}
                options={{
                    title:'Detalle del Viaje',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>
            <Stack.Screen name="ViajeAdd" component={ViajeAdd}
                options={{
                    title:'Agregar Nuevo Viaje',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackViajes

