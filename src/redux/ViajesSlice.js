import { createSlice } from "@reduxjs/toolkit"
import viajesData from '../data/ViajesData'

//DECLARAR ESTADO INICIAL

const initialState = {
    viajes: viajesData
}

export const ViajesSlice = createSlice({
    name:'viajes',
    initialState,
    reducers:{

    }
})

export const {

} = ViajesSlice.actions

export default ViajesSlice.reducer