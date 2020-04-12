import React, { useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange, country }) => {
  const [covidCountries, setCovidCountries] = useState([])
  useEffect(() => {
    const FetchAPI = async () => {
      setCovidCountries(await fetchCountries())
    }

    FetchAPI()
  }, [setCovidCountries])
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={e => handleCountryChange(e.target.value)}
      >
        <option value=''>Global</option>
        {covidCountries.length &&
          covidCountries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
