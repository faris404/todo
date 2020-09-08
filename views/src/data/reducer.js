import { FETCH_TEST, REMOVE_TEST } from './actions'
import {fetchTest,removeTest} from './testFunctions'

export const init = {}


export const reducer = (state = init, action) => {
    switch (action.type) {
        case FETCH_TEST:
            return fetchTest(state)
        case REMOVE_TEST:
            return removeTest(state,action.id)
        default:
            return state
    }
}
