import { configureStore } from "@reduxjs/toolkit"

import usuarioReducer from './UsuarioSlice'
import serviciosReducer from "./ServiciosSlice"
import viajesReducer from "./ViajesSlice"
import presupuestosReducer from "./PresupuestosSlice"

export const store = configureStore({
    reducer: {
        usuario: usuarioReducer,
        servicios: serviciosReducer,
        viajes: viajesReducer,
        presupuestos: presupuestosReducer,
    }
})
