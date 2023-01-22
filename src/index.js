import {validateIp} from "../helpers";
import {createMap} from "../helpers";

const  ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    if (validateIp(ipInput.value)) {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_9dPMrfMqVi7cvrxUowD4MGMpgapj5&ipAddress=${ipInput.value}`)
            .then(response => response.json())
            .then(setInfo)
    }
}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData();
    }
}

function setInfo(mapData) {
    console.log(mapData)
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = `${mapData.location.region}, ${mapData.location.country}`;
    timezoneInfo.innerText = mapData.location.timezone;
    ispInfo.innerText = mapData.isp;
}

// Map creation
ymaps.ready(createMap);
