import axios from "axios";

const baseUrl = import.meta.VITE_BASEURL
const apiKey = import.meta.VITE_APIKEY

const getTestingList = async() => {
    const test = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    console.log({ movieList: test})
}

const cari = async() => {
    const pencarian = await axios.get("")
}