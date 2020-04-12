import React, { useEffect, useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'

import { fetchDailyData } from '../../api'

import styles from './Chart.module.css'

const Chart = () => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData()

      setDailyData(initialDailyData)
    }
    fetchAPI()
  }, [])

  const lineChart = dailyData.length && (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(data => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true
          },
          {
            data: dailyData.map(data => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true
          }
        ]
      }}
    />
  )

  return <div className={styles.container}>{lineChart}</div>
}

export default Chart
