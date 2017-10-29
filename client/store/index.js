import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import logger from 'redux-logger'

const GET_BLOCKS = 'GET_BLOCKS'

export function getBlocks(blocks) {
    return { type: GET_BLOCKS, blocks }
}

export function loadBlocks(date) {
    return function thunk(dispatch) {
        return axios.get(`http://localhost:3001/insight-api/blocks?limit=5000&blockDate=${date}`)
            .then(res => res.data)
            .then(blocks => {
                dispatch(getBlocks(blocks))
            })
            .catch(err => {
                return console.log(err)
            })
    }
}

const blocks = function reducer(state = { blocks: [] }, action) {
    switch (action.type) {
        case GET_BLOCKS:
            return action.blocks
        default:
            return state
    }
}

const rootReducer = combineReducers({
    blocks
})

// export default createStore(rootReducer, applyMiddleware(thunk, logger))
export default createStore(rootReducer, applyMiddleware(thunk))