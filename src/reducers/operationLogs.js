import {
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
} from '../actions';

const operationLogs = (state = [], action) =>{
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const operationLog = {
                description: action.description,
                operatedAt: action.operatedAt
            }
            //stateのキーoperationLogに対する値だとなぜ判定できる？
            //また，配列中の...stateはどのように展開される？
            //→operationLogsと定義しているから？その後の処理はuseReducerに任せるだけ？
            return [operationLog, ...state]
        case DELETE_ALL_OPERATION_LOGS:
            return []
        default:
            return state
    }
}

export default operationLogs