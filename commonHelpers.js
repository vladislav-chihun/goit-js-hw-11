import{S as u,i as a}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function p(s){return s.hits.map(e=>`<div class="gallery-item">
            <a href="${e.largeImageURL}" target="_blank">
                <img src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <ul class="img-data-list">
                <li class="likes">Likes<p>${e.likes}</p></li>
                <li class="views">Views<p>${e.views}</p></li>
                <li class="comments">Comments<p>${e.comments}</p></li>
                <li class="downloads">Downloads<p>${e.downloads}</p></li>
            </ul>
        </div>`).join("")}function d(s){const e="43242256-64b8ba54a0ed56e09a2e1fe41",o="https://pixabay.com/api/?key="+e,n=new URLSearchParams({key:`${e}`,q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${o}&${n}`;return fetch(t).then(r=>r.json())}const l=document.querySelector(".form"),m=document.querySelector(".gallery"),f=new u(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.getElementById("loader");l.addEventListener("submit",s=>{s.preventDefault();const e=l.elements.input.value;e!==""&&(c.style.display="block",d(e).then(o=>{if(o.hits.length===0)a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const n=p(o);m.innerHTML=n,f.refresh()}c.style.display="none"}).catch(o=>{a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}))});
//# sourceMappingURL=commonHelpers.js.map
