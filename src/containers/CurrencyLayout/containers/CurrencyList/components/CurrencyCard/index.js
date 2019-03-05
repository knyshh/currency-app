import React from 'react'
import PropTypes from 'prop-types'
import './styled/index.scss'

const CurrencyCard = ({ name, rate, icon }) => (
    <div className="currencyItem">
        <span>
            <i className={`currencyItem__icon fas fa-${icon}`} />
        </span>
        <span className="currencyItem__name"> {name} : </span>
        <span className="currencyItem__rate"> {rate} </span>
    </div>
)

CurrencyCard.propTypes = {
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
}
export default CurrencyCard
