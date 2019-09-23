# store/index.js

```js
    import { createStore, Middleware, compose } from "redux";
    import reducer from './reducer'
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//配置调试工具
    )
    export default store
```

# store/reducer.js

```js
    import { 
        CHANGE_INPUT_VALUE,
        ON_CHANGE_DATA,
        OPEN_ID
    } from "./actionTypes";

    const defaultState = {
        inputValue: '',
        list: []
    }

    export default (state = defaultState, action) => {
        if (action.type === CHANGE_INPUT_VALUE) {
            const newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            return newState
        }

        if (action.type === ON_CHANGE_DATA) {
            const newState = JSON.parse(JSON.stringify(state))
            newState.list.push(state.inputValue)
            newState.inputValue = ''
            return newState
        }

        if (action.type === OPEN_ID) {
            const newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index, 1)
            return newState
        }

        return state
    }
```

# store/actionTypes.js

```js
    export const CHANGE_INPUT_VALUE = 'change_input_value'

    export const ON_CHANGE_DATA = 'on_change_data'

    export const OPEN_ID = 'open_id'
```

# store/actionCreators.js

```js
    import {
        ON_CHANGE_DATA,
        CHANGE_INPUT_VALUE,
        OPEN_ID
    } from "./actionTypes";

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
```

# 使用 组件.js

```js
    import store from 'store'

    constructor(props){
        super(props)
        let {解构} = store.getState()
        this.state ={
            解构
        }
        store.subscribe(_handleStoreChange)
    }
    render(){
        return (
            ...
        )
    }
    _handleStoreChange=()=>{
        this.setState(store.getState())
    }
```