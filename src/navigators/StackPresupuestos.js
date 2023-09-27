import { DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//SCREENS
import PresupuestosList from '../screens/presupuestos/PresupuestosList'
import PresupuestoDetail from '../screens/presupuestos/PresupuestoDetail'
import PresupuestoAdd from '../screens/presupuestos/PresupuestoAdd'

const Stack = createNativeStackNavigator()

const StackPresupuestos = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PresupuestosList" component={PresupuestosList}
                options={{
                    title:'Pedidos de Presupuesto',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>
            <Stack.Screen name="PresupuestoDetail" component={PresupuestoDetail}
                options={{
                    title:'Detalle del Presupuesto',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>
            <Stack.Screen name="PresupuestoAdd" component={PresupuestoAdd}
                options={{
                    title:'Agregar Nuevo Presupuesto',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackPresupuestos