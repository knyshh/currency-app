import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Preloader from './components/Preloader'
import * as actions from '../../actions/actions'
import LIST_OF_CURRENCIES from '../../constants/listOfCurrencies'
import ADDITIONAL_CURRENCIES from '../../constants/additionalCurrency'
import CurrencyList from './containers/CurrencyList'
import Header from './components/Header'
import './styled/index.scss'
import '../../base.scss'
import AdditionalCurrency from './components/AdditionalCurrency'

class CurrencyLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            baseCurrency: LIST_OF_CURRENCIES,
            additionalCurrencies: ADDITIONAL_CURRENCIES
        }
    }

    componentDidMount() {
        const { onFetchedCurrency } = this.props
        onFetchedCurrency()
    }

    handleUpdate = () => {
        const { onUpdateCurrency } = this.props
        onUpdateCurrency()
    }

    handleAddCurrency = e => {
        if (e.target.checked) {
            e.persist()
            this.setState(prevState => ({
                baseCurrency: {
                    ...prevState.baseCurrency,
                    [e.target.value]: e.target.value
                }
            }))
        } else {
            e.persist()
            this.setState(prevState => {
                const newState = Object.keys(prevState.baseCurrency)
                    .filter(key => key !== e.target.value)
                    .reduce(
                        (result, current) => ({
                            ...result,
                            [current]: prevState.baseCurrency[current]
                        }),
                        {}
                    )
                return {
                    baseCurrency: newState
                }
            })
        }
    }

    render() {
        const { loading, rates, base } = this.props
        const { baseCurrency, additionalCurrencies } = this.state

        return (
            <div className="App">
                {loading ? (
                    <Preloader />
                ) : (
                    <div className="currencyLayout">
                        <Header base={base} />

                        <CurrencyList baseCurrency={baseCurrency} rates={rates} />

                        <AdditionalCurrency
                            onAddCurrency={this.handleAddCurrency}
                            additionalCurrencies={additionalCurrencies}
                        />

                        <button
                            type="button"
                            onClick={this.handleUpdate}
                            className="button button--default"
                        >
                            <i className="fas fa-sync-alt" /> Update currencies data
                        </button>
                    </div>
                )}
            </div>
        )
    }
}

CurrencyLayout.propTypes = {
    loading: PropTypes.bool.isRequired,
    onFetchedCurrency: PropTypes.func.isRequired,
    onUpdateCurrency: PropTypes.func.isRequired,
    rates: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.number),
            PropTypes.number,
            PropTypes.string
        ])
    ).isRequired,
    base: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    loading: state.currency.loading,
    rates: state.currency.rates,
    base: state.currency.base
})
const mapDispatchToProps = {
    onFetchedCurrency: actions.fetchCurrencyData,
    onUpdateCurrency: actions.updateCurrencyData
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyLayout)
