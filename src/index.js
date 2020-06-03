const endPointExotics = "http://localhost:3000/exotics"

document.addEventListener('DOMContentLoaded', () => {
    getExotic()
});

function getExotic() {
    fetch(endPointExotics)
    .then(response => response.json())
    .then(exotic => {
        exotic.data.forEach(exotic => {
            let newExotic = new Exotic(exotic, exotic.attributes)
            document.querySelector('#exotic-container').innerHTML += newExotic.renderExoticCard()
        });
    });
}