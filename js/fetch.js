const BASE_URL = "http://localhost:8080/api/"


var fetchDataByUrl = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}