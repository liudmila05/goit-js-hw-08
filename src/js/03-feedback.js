import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

form.addEventListener(
    'input',
    throttle(e => {
        const objectToSave = { email: email.value, message: message.value };
        localStorage.setItem(localStorageKey, JSON.stringify(objectToSave));
    }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(localStorageKey);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
    };
};

const storageData = load(localStorageKey);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
};