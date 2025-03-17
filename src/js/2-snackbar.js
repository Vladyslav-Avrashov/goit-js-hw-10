import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const { state } = event.target.elements;
  const delay = Number(event.target.elements.delay.value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state.value === 'fulfilled') {
        resolve(delay);
      }
      reject(delay);
    }, delay);
  })
    .then(() =>
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
      })
    )
    .catch(() =>
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
      })
    );
});
