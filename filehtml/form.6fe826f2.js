var formEL=document.querySelector(".js-register-form");function onFormSubmit(e){e.preventDefault(),console.log(e.currentTarget.elements.email.value),console.log(e.currentTarget.elements.password.value),console.log(e.currentTarget.elements.subscription.value),new FormData(e.currentTarget).forEach((function(e,r){console.log(e,r)}))}formEL.addEventListener("submit",onFormSubmit);
//# sourceMappingURL=form.6fe826f2.js.map