// const BASE_URL = "http://localhost:3000"
// const EXOTICS_URL = `${BASE_URL}/exotics`
const ExoticsEndPoint = "http://localhost:3000/exotics"

document.addEventListener('DOMContentLoaded', () => {
    fetchExotics();
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

  
 
  