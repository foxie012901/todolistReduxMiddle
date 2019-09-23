import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import MThunkUI from "./MThunkUI";

import store from '../../store'
import {
    getChangeInputValue,
    getOnChangeData,
    getOpenId,
    initListAction,
    getTodolist
} from "../../store/actionCreators";



export default class MThunk extends Component {
    constructor(props) {
        super(props);
        let {
            inputValue,
            list
        } = store.getState()
        this.state = {
            inputValue,
            list,
            isShow: true,
        };
        store.subscribe(this._handleStoreChange)
    }
    componentDidMount() {
        console.log('thunk')
        const action = getTodolist()
        store.dispatch(action)

        this.setState({
            isShow: false
        })
    }
    render() {
        let Loading = (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator animating={this.state.isShow} /></View>
        )
        let PageW = (
            <MThunkUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                _handleInputChange={this._handleInputChange}
                _onChangeData={this._onChangeData}
                _openId={this._openId}
            />
        )
        return (
            <View style={{ width: '100%', height: '100%' }}>
                {
                    this.state.isShow ? Loading : PageW
                }
            </View >
        )
    }


    _openId = index => {
        const action = getOpenId(index)
        store.dispatch(action)
    }

    _handleInputChange = e => {
        const action = getChangeInputValue(e)
        store.dispatch(action)
    }

    _onChangeData = () => {
        const action = getOnChangeData()
        store.dispatch(action)
    }

    _handleStoreChange = () => {
        this.setState(store.getState())
    }
}
