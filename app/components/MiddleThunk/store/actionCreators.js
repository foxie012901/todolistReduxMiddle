import {
    ON_CHANGE_DATA,
    CHANGE_INPUT_VALUE,
    OPEN_ID,
    INIT_LIST_ACTION,
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


export const getTodolist = () => {
    return (dispatch) => {
        axios.get('http://localhost.charlesproxy.com:3000/list.json').then((res) => {
            let { status, data } = res.data
            if (status === 200) {

                console.log(data)
                const action = initListAction(data)
                dispatch(action)
            }else {
                console.log('请求数据失败')
            }


        })
    }

    // return (dispatch)=>{

    //     const action = initListAction([1,2,3])
    //     dispatch(action)
    // }


    // return ((resolve, reject) => {
    //             instance.get(api, params)
    //                 .then(res => {
    //                     console.log(res)
    //                     resolve(res.data);
    //                 })
    //                 .catch(err => {
    //                     reject(err)
    //                 })
    //         })
}

// export const getInitList = () =>({
//     type:GET_INIT_LIST
// })