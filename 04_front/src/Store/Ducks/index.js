import { combineReducers } from 'redux'
import drone from './drone'
import metrica from './metrica'

const appReducer = combineReducers({ drone, metrica })

export default (state, action) => {
    return appReducer(state, action)
}