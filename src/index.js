const  ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_9dPMrfMqVi7cvrxUowD4MGMpgapj5&ipAddress=${ipInput.value}`)
        .then(response => response.json())
        .then(console.log)
}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData();
    }
}