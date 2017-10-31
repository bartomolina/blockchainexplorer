import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import logger from 'redux-logger'

const GET_BLOCKS = 'GET_BLOCKS'
const GET_TRANSACTIONS = 'GET_TRANSACTIONS'
const LOAD_DATA = 'LOAD_DATA'
const LOAD_COMPLETE = 'LOAD_COMPLETE'

export function getBlocks(blocks) {
    return { type: GET_BLOCKS, blocks }
}

export function getTransactions(transactions) {
    return { type: GET_TRANSACTIONS, transactions }
}

export function startLoading() {
    return { type: LOAD_DATA, status: true }
}

export function endLoading() {
    return { type: LOAD_COMPLETE, status: false }
}

export function loadBlocks(date) {
    return function thunk(dispatch) {
        dispatch(startLoading())
        return axios.get(`http://localhost:3001/insight-api/blocks?limit=200&blockDate=${date}`)
            .then(res => res.data)
            .then(blocks => {
                dispatch(endLoading())
                dispatch(getBlocks(blocks))

            })
            .catch(err => {
                dispatch(endLoading())
                return console.log(err)
            })
    }
}

export function loadTransactions(hash) {
    return function thunk(dispatch) {
        dispatch(startLoading())
        return axios.get(`http://localhost:3001/insight-api/txs/?block=${hash}`)
            .then(res => res.data)
            .then(transactions => {
                console.log('tr', transactions)
                dispatch(endLoading())
                dispatch(getTransactions(transactions))

            })
            .catch(err => {
                dispatch(endLoading())
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

const transactions = function reducer(state = { txs: [] }, action) {
    switch (action.type) {
        case GET_TRANSACTIONS:
            console.log(action.transactions)
            return action.transactions
        default:
            return state
    }
}

const loading = function reducer(state = false, action) {
    switch (action.type) {
        case LOAD_DATA:
        case LOAD_COMPLETE:
            return action.status
        default:
            return state
    }
}

const rootReducer = combineReducers({
    blocks,
    transactions,
    loading
})

// export default createStore(rootReducer, applyMiddleware(thunk, logger))
export default createStore(rootReducer, applyMiddleware(thunk))