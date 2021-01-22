import {
    CREATE_COUNT_PLUS
} from '../actions';

const createCount = (state = [], action) =>{
    switch (action.type) {
        case CREATE_COUNT_PLUS:
            let createCount = action.createCount
            createCount = createCount + 1
            return createCount
        default:
            return state
    }
}

export default createCount