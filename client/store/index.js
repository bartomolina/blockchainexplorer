import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const GET_BLOCKS = 'GET_BLOCKS'

export function getBlocks(blocks) {
    return { type: GET_BLOCKS, blocks }
}

export function loadBlocks(blocks) {
    return function thunk(dispatch) {
        return axios.get('http://localhost:3001/insight-api/blocks?limit=10&blockDate=2013-02-03')
            .then(res => res.data)
            .then(blocks => {
                dispatch(getBlocks(blocks))
            })
            .catch(err => {
                return console.log(err)
            })
    }
}

const blocksReducer = function reducer(state = { blocks: [1, 2] }, action) {
    switch (action.type) {
        case GET_BLOCKS:
            return action.blocks
        default:
            return state
    }
}

const rootReducer = combineReducers({
    blocksReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))