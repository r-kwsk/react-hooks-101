import { CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_EVENT } from '../actions'


const events = (state = [], action) => {//stateはデフォルト値を設定
    switch(action.type) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body }
            const length = state.length//配列の長さを取得するメソッド
            const id = length === 0 ? 1 : length + 1
            // let id
            // if (length === 0 ) {
            //     id = 1
            // } else {
            //     id = length + 1
            // }
            return [...state, { id, ...event}]//idはid: idの短縮系

        case DELETE_EVENT:
            //actionから渡ってきたものと違うものだけ抽出
            return state.filter(event => event.id !== action.id)
        case DELETE_ALL_EVENTS:
            return []
        default:
            return state
    }
}

export default events