export function imageRender(obj) {
    return `<div class="gallery">
      <img src="${obj.previewURL}" />
      <ul class="img-data-list">
        <li class="likes">${obj.likes}</li>
        <li class="views">${obj.views}</li>
        <li class="comments">${obj.comments}</li>
        <li class="downloads">${obj.downloads}</li>
      </ul>
    </div>`;
}
