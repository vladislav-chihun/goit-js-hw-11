export function imageRender(data) {
    return data.hits.map((item) => {
        return `<div class="gallery-item">
            <img src="${item.largeImageURL}" alt="Image ${item.id}" />
            <ul class="img-data-list">
                <li class="likes">${item.likes}</li>
                <li class="views">${item.views}</li>
                <li class="comments">${item.comments}</li>
                <li class="downloads">${item.downloads}</li>
            </ul>
        </div>`;
    }).join('');
}
