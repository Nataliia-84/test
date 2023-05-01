// const inputEl = document.querySelector(".js-input");
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// можна елементи записати як обєкт:
const refs = {
    input:document.querySelector(".js-input"),
    nameLabel:document.querySelector('.js-button > span'),
    license:document.querySelector('.js-license'),
    btn:document.querySelector('.js-button'),
}
// події інпута:
// подія фокус focus
// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputInput);
// function onInputFocus() {
//     console.log('подія фокус focus')
// }
//  подія блюр blur

// function onInputBlur() {
//     console.log('подія блюр blur')
// }

// function onInputChange(evt) {
//     console.log(evt.currentTarget.value)
// }

// function onInputInput(evt) {
//     console.log(evt.currentTarget.value)
// }

refs.input.addEventListener('input', onInputChange);

function onInputChange(evt) {
    const valueInput=evt.currentTarget.value
    console.log(valueInput);
    refs.nameLabel.textContent = valueInput;

}
// подія change для чекбоксів

refs.license.addEventListener('change', onLicenseChange);

function onLicenseChange(evt) {
    const checkBox = evt.currentTarget.checked;//повертає true || false
    console.log(checkBox)//повертає true || false
    refs.btn.disabled=!checkBox
}

