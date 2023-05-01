const form = document.querySelector('.js-search');
const list = document.querySelector('.js-list')

const BASE_URL = 'http://api.weatherapi.com/v1';
const END_POINT = '/forecast.json';
//параметри
//key=ce2cb9b2a3da414bb5b172546231704
//q=
//days
//lang

form.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault()
    console.dir(evt.target);
    const inputName = evt.currentTarget.elements.query.value;
    const selectName = evt.currentTarget.elements.days.value;
    // const { query, days } = evt.currentTarget.elements;
    console.log(inputName)
    console.dir(selectName)
    getWeather(inputName, selectName)
        .then(data => list.innerHTML=createMarkup(data.forecast.forecastday))
        .catch(err => console.log(err));
}


function getWeather(cityName, selectName) {
    const URL = `${BASE_URL}${END_POINT}?key=ce2cb9b2a3da414bb5b172546231704&q=${cityName}&days=${selectName}&$lang=uk`;
    return fetch(URL).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp.json();
        
    })

}

function createMarkup(arr) {
   return arr.map(({date,day:{avgtemp_c,condition:{icon, text}}})=>` <li class="weatheritem">
        <img src="${icon}" alt="${text}">
        <p>${text}</p>
        <h2>${date}</h2>
        <h3>${avgtemp_c}</h3>
    </li>`).join('')
}