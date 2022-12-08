const BASE_URL = "http://localhost:8080/api/"


const fetchDataByUrl = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const makeRequest = async (url, settings) => {
    const response = await fetch(url, settings);
    const data = await response.json();
    return data;
}
