const mainButton = document.querySelector('.js-target-btn')
const addButton = document.querySelector('.js-add-listener');
const removeButton = document.querySelector('.js-remove-listener');

// mainButton.addEventListener('click', onClickMainButton);
// function onClickMainButton() {
//     console.log('clic')
// }

addButton.addEventListener('click', onClickAddButton);
function onClickAddButton() {
    mainButton.addEventListener('click', onClickMainButton); 
    console.log('clickadd')
}

removeButton.addEventListener('click', onClickRemoveButton);

function onClickRemoveButton() {
    mainButton.removeEventListener('click', onClickMainButton)
console.log('clickremove')
}

function onClickMainButton() {
    console.log('click')
}