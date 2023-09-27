import { DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ServiciosList from '../screens/servicios/ServiciosList'
import ServicioDetail from '../screens/servicios/ServicioDetail'
import FirmaScreen from '../screens/servicios/FirmaScreen'
import ElementosScreen from '../screens/servicios/ElementosScreen'


const Stack = createNativeStackNavigator()

const StackServicios = (() => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ServiciosList" component={ServiciosList}
                options={{
                    title:'Pedidos de servicio',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>
            <Stack.Screen name="ServicioDetail" component={ServicioDetail}
                options={{
                    title:'Detalle del Pedido',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>
            <Stack.Screen name="ElementosScreen" component={ElementosScreen}
                options={{
                    title:'Elementos del Trabajo',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>
            <Stack.Screen name="FirmaScreen" component={FirmaScreen}
                options={{
                    title:'Firma del Funcionario',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>

        </Stack.Navigator>
    )
})

export default StackServicios