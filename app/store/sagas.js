import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_SAGA } from "./actionTypes";
import { initListAction } from "./actionCreators";
import axios from 'axios'

function* mySaga() {
    yield takeEvery(GET_INIT_SAGA , getInitSaga)
}
function* getInitSaga() {
    try {
        const res = yield axios.get('http://localhost.charlesproxy.com:3000/list.json');
        let { status, data } = res.data
        if (status === 200) {
            const action = initListAction(data)
            yield put(action)  //因为saga没有dispatch,所以得用put,效果一样 ,加yield表示等action处理完成之后再继续往下执行代码
        }
    } catch (e) {
        console.log('list.json 网络请求失败')
    }
}
export default mySaga