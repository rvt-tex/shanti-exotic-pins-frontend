// const BASE_URL = "http://localhost:3000"
// const EXOTICS_URL = `${BASE_URL}/exotics`
const ExoticsEndPoint = "http://localhost:3000/exotics"

document.addEventListener('DOMContentLoaded', () => {
    fetchExotics();

    const createExoticform = document.querySelector("#new-exotic-form");

    createExoticForm.addEventListener("submit", (event) =>
    createExoticFormHandler(event));

});

function fetchExotics() {
    fetch(ExoticsEndPoint)
    .then(response => response.json())
    .then(exotics => {
        exotics.data.forEach(exotic => {
            const exoticLayout = `<div data-id=${exotic.id}>
            <h2>${exotic.attributes.brand.name}</h2>
            <h4>${exotic.attributes.title}</h4>
            <img src=${exotic.attributes.image_url} width: 800px; height: 600px;
            <p>${exotic.attributes.description}</p>
            </div>
            <br><br>`;

            document.querySelector('#exotic-container').innerHTML += exoticLayout;
            
        })
    })
}

function createExoticFormHandler(event) {
    event.preventDefault();
    const exoticBrandNameId = parseInt(document.querySelector('#brands-dropdown').value)
    const exoticTitleInput = document.querySelector('#input-title').value
    const exoticImageUrlInput = document.querySelector('#input-url').value
    const exoticDescriptionInput = document.querySelector('#input-description').value

    postFetch(exoticBrandNameId,exoticTitleInput, exoticImageUrlInput, xoticDescriptionInput);
}

function postFetch(brandId, title, image_url, description) {
    console.log(brandId, title, image_url, description);
}
 
  