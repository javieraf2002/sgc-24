import { createSlice } from "@reduxjs/toolkit"
import presupuestosData from '../data/PresupuestosData'

//DECLARAR ESTADO INICIAL

const initialState = {
    presupuestos: presupuestosData
}

export const PresupuestosSlice = createSlice({
    name:'presupuestos',
    initialState,
    reducers:{

    }
})

export const {

} = PresupuestosSlice.actions

export default PresupuestosSlice.reducer