import { createSlice } from "@reduxjs/toolkit"

//DECLARAR ESTADO INICIAL

const initialState = {
    usuario: []
}

export const UsuarioSlice = createSlice({
    name:'usuario',
    initialState,
    reducers:{
        loginUsuarioReducer:(state, action)=>{
            state.usuario = action.payload,
            console.log(state.usuario)
        },
        logoutUsuarioReducer: (state)=>{
            state.usuario = []
            console.log(state.usuario)
        }
    }
})

export const {
    loginUsuarioReducer,
    logoutUsuarioReducer,
} = UsuarioSlice.actions

export default UsuarioSlice.reducer