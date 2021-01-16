import { FINISH_EVENT, DELETE_EVENT_DONE } from '../actions'


const eventsDone = (state = [], action) => {//stateはデフォルト値を設定
    switch(action.type) {
        case FINISH_EVENT:
            const event = { title: action.title, body: action.body }
            const id = action.id
            return [...state, { id, ...event}]//idはid: idの短縮系
        case DELETE_EVENT_DONE:
            //actionから渡ってきたものと違うものだけ抽出
            return state.filter(event => event.id !== action.id)
        default:
            return state
    }
}

export default eventsDone