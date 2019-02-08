// UI varibles
const number = document.querySelector('input[type="number"]');
const button = document.querySelector('.get-jokes');
const jokesList = document.querySelector('.jokes-list');

// Event Listener
button.addEventListener('click', getJokes);

// Function makes API request and updates UI
function getJokes(e) {
  e.preventDefault();

  const numberOfJokes = number.value;

  if (numberOfJokes < 1) {

    jokesList.innerHTML = '<li>Number must be greater than 0</li>';

  } else {

    jokesList.innerHTML = '';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

    xhr.onload = function () {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);

        let output = '';

        if (response.type === 'success') {
          // Use response.value to access the jokes array in the response object
          response.value.forEach(function (joke) {
            output += `<li>${joke.joke}</li>`;
          });
        } else {
          output += '<li>Something went wrong.</li>'
        }

        jokesList.innerHTML = output;
      }
    }

    xhr.send();

  }

  number.value = '';
}