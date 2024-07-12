const anchor = document.querySelector('a')!;
if (anchor) {
  console.log(anchor.href);
}
console.log(anchor.href);
console.log(anchor.protocol);
console.log(anchor.hostname);
console.log(anchor.port);

//const form = document.querySelector('form')!;
/**The as keyword in TypeScript is used for type assertion,
 explicitly telling the compiler to treat a value as a specific type. */
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
