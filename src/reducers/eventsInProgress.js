import { DELETE_EVENT_IN_PROGRESS, START_EVENT } from '../actions'


const eventsInProgress = (state = [], action) => {//stateはデフォルト値を設定
    switch(action.type) {
        case START_EVENT:
            const event = { title: action.title, body: action.body }
            const id = action.id
            return [...state, { id, ...event}]//idはid: idの短縮系

        case DELETE_EVENT_IN_PROGRESS:
            //actionから渡ってきたものと違うものだけ抽出
            return state.filter(event => event.id !== action.id)
        default:
            return state
    }
}

export default eventsInProgress