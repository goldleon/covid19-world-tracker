import axios from "axios";

const apiUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableURL = apiUrl
    if (country) changeableURL += `/countries/${country}`

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);

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

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${apiUrl}/countries`)
        return countries.map(country => country.name)
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountry = async (country) => {
    try {
        const response = await axios.get(`${apiUrl}/countries/`)
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}