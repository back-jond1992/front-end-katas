const root = document.querySelector('body');
const jokeForm = document.querySelector('#jokeForm');
const usernameInput = jokeForm.elements.username;
const jokeInput = jokeForm.elements.joke;
const popUp = document.querySelector('#pop-up');

jokeForm.onsubmit = (event) => {
  const formNotComplete = !usernameInput.value || !jokeInput.value;

  if (formNotComplete) {
    usernameInput.style.backgroundColor = 'red';
    jokeInput.style.backgroundColor = 'red';
  } else {
    const textElement = document.createElement('p');
    textElement.innerText = 'ERROR connect ECONNREFUSED 127.0.0.1:5432';
    jokeForm.appendChild(textElement);
  }
};

setTimeout(() => {
  popUp.style.display = 'flex';
  const signUpButton = document.getElementById('pop-up__register');
  signUpButton.focus();
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      signUpButton.focus();
    }
  });

  const closeButton = document.getElementById('pop-up__close');

  closeButton.addEventListener('click', () => {
    popUp.style.display = 'none';
  });
}, 5000);
