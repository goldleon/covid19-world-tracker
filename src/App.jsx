import React from 'react'

// Data Fetching
import { fetchData } from './api'

// Components
import { Cards, Chart, CountryPicker } from './components'

// Styles
import styles from './App.module.css'

// Images
import covid19Image from './imgs/covid-19.png'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount () {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async country => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country })
  }

  render () {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img
          src={covid19Image}
          alt='Covid-19 World Tracker'
          className={styles.image}
        />
        <Cards data={data} />
        <CountryPicker
          country={country}
          handleCountryChange={this.handleCountryChange}
        />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
