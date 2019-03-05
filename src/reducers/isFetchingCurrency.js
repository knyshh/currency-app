import * as actions from '../actions/actionTypes'

const initialState = {
    loading: false,
    rates: {},
    base: ''
}

const isFetchingCurrencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CURRENCY_FETCH_START:
            return {
                ...state,
                loading: true
            }
        case actions.CURRENCY_FETCH_SUCCESS:
            return {
                ...state,
                rates: action.rates,
                base: action.base,
                loading: false
            }
        case actions.CURRENCY_FETCH_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default isFetchingCurrencyReducer
