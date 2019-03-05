import * as actionTypes from './actionTypes'

export const fetchCurrencyStart = () => ({
    type: actionTypes.CURRENCY_FETCH_START
})
export const fetchCurrencySuccess = (rates, base) => ({
    type: actionTypes.CURRENCY_FETCH_SUCCESS,
    rates,
    base
})

export const fetchCurrencyFail = error => ({
    type: actionTypes.CURRENCY_FETCH_FAIL,
    error
})

async function getData() {
    const response = await fetch(
        'https://openexchangerates.org/api/latest.json?app_id=8d3fa2e40a7840e8936076a76ecb4a38'
    )
    const data = await response.json()
    return data
}

export const updateCurrencyData = () => dispatch => {
    dispatch(fetchCurrencyStart())

    getData()
        .then(response => {
            dispatch(fetchCurrencySuccess(response.rates, response.base))
        })
        .catch(err => dispatch(fetchCurrencyFail(err)))
}

export const fetchData = () => dispatch => {
    getData()
        .then(response => {
            dispatch(fetchCurrencySuccess(response.rates, response.base))
        })
        .catch(err => dispatch(fetchCurrencyFail(err)))
}

export const fetchCurrencyData = () => dispatch => {
    dispatch(fetchCurrencyStart())

    getData()
        .then(response => {
            setInterval(() => {
                dispatch(fetchData())
            }, 10000)

            dispatch(fetchCurrencySuccess(response.rates, response.base))
        })
        .catch(err => dispatch(fetchCurrencyFail(err)))
}
