
function getPhotos(key,q,image_type,orientation,safesearch) {
    const API_KEY = '43242256-64b8ba54a0ed56e09a2e1fe41';
    const BASE_URL = "https://pixabay.com/api/?" + API_KEY;
    const params = new URLSearchParams({
        key: `${API_KEY}`,
        q:"yellolw",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    })
    const URL = `${BASE_URL}${params}`;
    const options = {
        headers: {
            "X-RateLimit-Limit": "",
            "X-RateLimit-Remaining": "",
            "X-RateLimit-Reset": "",
        }
    }
    return fetch(URL, options).then(res => res.json());
}
getPhotos().then(data => { console.log(data) })