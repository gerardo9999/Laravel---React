import { ACTION_TYPE } from "./actionType";


export const getFilterCategoria = data => ({
    type : ACTION_TYPE.LIST_CATEGORIA,
    payload : data
}) ;


export const getFilterCategoriaSuccess =  data => ({
    type : ACTION_TYPE.LIST_CATEGORIA_SUCCESS,
    payload : data
}) 

export const getFilterCategoriaError = error => ({
    type : ACTION_TYPE.LIST_CATEGORIA_ERROR,
    payload : data
})