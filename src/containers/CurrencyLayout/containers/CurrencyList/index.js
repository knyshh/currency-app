import React from 'react'
import PropTypes from 'prop-types'
import CurrencyCard from './components/CurrencyCard'
import ICON_OF_CURRENCIES from '../../../../constants/iconCurrency'
import './styled/index.scss'

const CurrencyList = ({ rates, base, baseCurrency }) => {
    console.log('rates, base, baseCurrency ', rates, base, baseCurrency)
    return (
        <div className="currencyList">
            <h3 className="currencyList__title">EXCHANGE RATES</h3>
            {rates &&
                Object.keys(rates).map(rate => {
                    if (baseCurrency[rate]) {
                        return (
                            <CurrencyCard
                                icon={ICON_OF_CURRENCIES[rate]}
                                name={rate}
                                rate={rates[rate]}
                                key={rate}
                            />
                        )
                    }
                })}
        </div>
    )
}

CurrencyList.propTypes = {
    rates: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.number),
            PropTypes.number,
            PropTypes.string
        ])
    ).isRequired,
    base: PropTypes.string.isRequired,
    baseCurrency: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string])
    ).isRequired
}

// const mapStateToProps = state => ({
//     loading: state.currency.loading,
//     rates: state.currency.rates,
//     base: state.currency.base
// })

export default CurrencyList
