// const BrandsEndPoint = "http://localhost:3000/brands"

// document.addEventListener('DOMContentLoaded', () => {
//     fetchBrands();
// });

// function fetchBrands() {
//     fetch(BrandsEndPoint)
//     .then(response => response.json())
//     .then(brands => {
//         brands.data.forEach(brand => {
//             const brandLayout = `<div data-id=${brand.id}>
//             <h2>${brand.attributes.name}</h2>
//             </div>
//             <br><br>`;

//             document.querySelector('#exotic-container').innerHTML += brandLayout;
            
//         })
//     })
// }