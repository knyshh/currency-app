import React from 'react'
import PropTypes from 'prop-types'
import './styled/index.scss'

const AdditionalCurrency = ({ additionalCurrencies, onAddCurrency }) => (
    <div className="additionalCurrencyList">
        <h4 className="additionalCurrencyList__title"> Add other currencies </h4>
        {additionalCurrencies &&
            Object.keys(additionalCurrencies).map(value => (
                <div key={value} className="additionalCurrencyList__item">
                    <label className="additionalCurrencyList__label" htmlFor={value}>
                        <input
                            className="checkbox"
                            id={value}
                            value={additionalCurrencies[value]}
                            onClick={e => onAddCurrency(e)}
                            type="checkbox"
                        />
                        {additionalCurrencies[value]}
                    </label>
                </div>
            ))}
    </div>
)

AdditionalCurrency.propTypes = {
    additionalCurrencies: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string])
    ).isRequired,
    onAddCurrency: PropTypes.func.isRequired
}

export default AdditionalCurrency
