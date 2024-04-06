import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { imageRender } from './render-functions';

const renderHTML = imageRender
const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", e => {
    e.preventDefault();
    const q = form.elements.input.value; 
    if (q === "") return;
    getPhotos(q).then(data => {
        const markup = renderHTML;
    })
});

function getPhotos(q) {
    const API_KEY = '43242256-64b8ba54a0ed56e09a2e1fe41';
    const BASE_URL = "https://pixabay.com/api/?key=" + API_KEY;
    const params = new URLSearchParams({
        key: `${API_KEY}`,
        q: `${q}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const URL = `${BASE_URL}&${params}`;
    return fetch(URL).then(res => res.json());
}

