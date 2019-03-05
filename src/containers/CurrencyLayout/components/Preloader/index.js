import React from 'react'
import './styled/index.scss'

const Preloader = () => (
    <div className="preloader">
        <div className="preloader__circle preloader__circle--green" />
        <div className="preloader__circle preloader__circle--red" />
    </div>
)

export default Preloader
