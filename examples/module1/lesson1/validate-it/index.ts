
import { validate, NUMBER_VALIDATORS } from './validator';


function main() {

  const input: HTMLInputElement = document.querySelector('#input')!;
  const validationBtn: HTMLButtonElement = document.querySelector('#validation-btn')!;
  const cleanupBtn: HTMLButtonElement = document.querySelector('#cleanup-btn')!;
  const result: HTMLDivElement = document.querySelector('#result')!;

  validationBtn.addEventListener('click', () => {
    const validationMessage = validate(input.value, NUMBER_VALIDATORS);
    result.innerHTML = validationMessage;
  });

  cleanupBtn.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();