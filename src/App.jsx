import React from 'react'

// Data Fetching
import { fetchData } from './api'

// Components
import { Cards, Chart, CountryPicker } from './components'

// Styles
import styles from './App.module.css'

class App extends React.Component {
  state = {
    data: {}
  }

  async componentDidMount () {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  render () {
    const { data } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App
