function getTest() {
    const BASE_URL = "";
    const ENDPOINT = "";
    const URL = `${BASE_URL}${ENDPOINT}`
    return fetch(url).then(res => res.json());
}