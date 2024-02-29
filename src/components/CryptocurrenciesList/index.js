// Write your JS code here
import {Component} from 'react'

import CryptocurrenciesItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  cryptocurrenciesHeader = () => (
    <div>
      <p>Coin Type</p>
      <div>
        <p>USD</p>
        <p>EURO</p>
      </div>
    </div>
  )

  cryptocurrenciesview = () => {
    const {cryptocurrenciesdata} = this.props

    return (
      <div>
        {this.cryptocurrenciesHeader()}
        <ul>
          {cryptocurrenciesdata.map(each => (
            <CryptocurrenciesItem key={each.id} cryptoDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.cryptocurrenciesview()}
      </div>
    )
  }
}

export default CryptocurrenciesList
