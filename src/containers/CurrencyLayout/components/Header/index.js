import React from 'react'
import PropTypes from 'prop-types'
import './styled/index.scss'

const Header = ({ base }) => (
    <header className="header">
        <h2 className="header__title"> Currency List </h2>
        <h3 className="header__subtitle">
            Base currency : <i className="header__icon fas fa-dollar-sign" />
            <span className="header__txt">{base}</span>
        </h3>
    </header>
)

Header.propTypes = {
    base: PropTypes.string.isRequired
}

export default Header
