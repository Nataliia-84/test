const formEL = document.querySelector('.js-register-form');

formEL.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    //вибір значень форм
    console.log(evt.currentTarget.elements.email.value);
    console.log(evt.currentTarget.elements.password.value);
    console.log(evt.currentTarget.elements.subscription.value);

    //перебрати всі елементи фоми можна за допомогою:
    // formData і передаємо ссилку на Дом елемент, за допомогою:
    //forEach перебираємо всі елементи по значенням: value i name
    // збирає дані в обєкт
    const formData = new FormData(evt.currentTarget);
    formData.forEach((value, name) => {
        console.log(value,name)
    }) 

}