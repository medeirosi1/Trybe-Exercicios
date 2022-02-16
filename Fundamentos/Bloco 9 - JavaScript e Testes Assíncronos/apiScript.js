
// apiScript.js     

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const jokeContainer = document.getElementById('jokeContainer');
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokeContainer.innerHTML = JSON.stringify(data.joke));
};

window.onload = () => fetchJoke();