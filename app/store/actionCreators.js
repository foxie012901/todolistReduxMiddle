import {
    ON_CHANGE_DATA,
    CHANGE_INPUT_VALUE,
    OPEN_ID,
    INIT_LIST_ACTION,
    GET_INIT_SAGA
} from "./actionTypes";

import axios from 'axios'


export const getChangeInputValue = value => ({
    type: CHANGE_INPUT_VALUE,
    value,
})

export const getOnChangeData = () => ({
    type: ON_CHANGE_DATA
})

export const getOpenId = index => ({
    type: OPEN_ID,
    index
})

export const initListAction = data => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitSaga =()=>({
    type:GET_INIT_SAGA
})

