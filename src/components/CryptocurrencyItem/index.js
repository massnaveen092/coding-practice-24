// Write your JS code here
const CryptocurrenciesItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li>
      <div>
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
        <div>
          <p>{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrenciesItem
