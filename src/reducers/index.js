import { combineReducers } from 'redux'
import isFetchingCurrencyReducer from './isFetchingCurrency'

export default combineReducers({
    currency: isFetchingCurrencyReducer
})
