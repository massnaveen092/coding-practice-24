// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))
    this.setState({
      cryptocurrenciesList: updatedData,
      isLoading: false,
    })
  }

  rendercryptocurrenciesList = () => {
    const {cryptocurrenciesList} = this.state

    return <CryptocurrenciesList cryptocurrenciesList={cryptocurrenciesList} />
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="Ring" color="#ffffff" height={50} width={50} />
        ) : (
          this.rendercryptocurrenciesList()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
