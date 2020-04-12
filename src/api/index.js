import axios from "axios";

const apiUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(apiUrl);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${apiUrl}/daily`);

        const modifiedData = data.map(dailyData => {
            return { confirmed: dailyData.confirmed.total, date: dailyData.reportDate, deaths: dailyData.deaths.total }
        })
        return modifiedData
    } catch (error) {

    }
}