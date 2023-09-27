import { createSlice } from "@reduxjs/toolkit"
import serviciosData from '../data/ServiciosData'

//DECLARAR ESTADO INICIAL

const initialState = {
    servicios: serviciosData
}

export const ServiciosSlice = createSlice({
    name:'servicios',
    initialState,
    reducers:{

    }
})

export const {

} = ServiciosSlice.actions

export default ServiciosSlice.reducer