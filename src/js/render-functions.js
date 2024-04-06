export function imageRender(obj) {
    return `<div class="gallery">
      <img src="${data.hits[1].largeImageURL}" />
      <ul class="img-data-list">
        <li class="likes">${obj.likes}</li>
        <li class="views">${obj.likes}</li>
        <li class="comments">${obj.likes}</li>
        <li class="downloads">${obj.likes}</li>
      </ul>
    </div>`;
}
