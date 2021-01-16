import { CREATE_EVENT, DELETE_EVENT } from '../actions'


const events = (state = [], action) => {//stateはデフォルト値を設定
    switch(action.type) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body }
            const length = action.createCount
            const id = length === 0 ? 1 : length + 1
            // let id
            // if (length === 0 ) {
            //     id = 1
            // } else {
            //     id = length + 1
            // }
            //const events= としているので，以下はstateのeventsキーに対する処理となっている？
            return [...state, { id, ...event}]//idはid: idの短縮系

        case DELETE_EVENT:
            //actionから渡ってきたものと違うものだけ抽出
            return state.filter(event => event.id !== action.id)
        // case DELETE_ALL_EVENTS:
        //     return []
        default:
            return state
    }
}

export default events