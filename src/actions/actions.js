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

export const fetchCurrencyData = () => async dispatch => {
    //let timerId
    //clearTimeout(timerId)
    dispatch(fetchCurrencyStart())

    async function getData() {
        const response = await fetch(
            'https://openexchangerates.org/api/latest.json?app_id=e4e3a015babf461b9e6242d679e5e281'
        )
        const data = await response.json()
        console.log('data', data)
        return data
    }

    try {
        const response = await getData()
        // call fetchCurrencyData with settimout
        // timerId = setTimeout(dispatch(fetchCurrencyData()), 60000)
        dispatch(fetchCurrencySuccess(response.rates, response.base))
    } catch (err) {
        dispatch(fetchCurrencyFail(err))
    }
}
