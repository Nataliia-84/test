var form=document.querySelector(".js-search"),list=document.querySelector(".js-list"),BASE_URL="http://api.weatherapi.com/v1",END_POINT="/forecast.json";function onSearch(e){e.preventDefault(),console.dir(e.target);var t=e.currentTarget.elements.query.value,n=e.currentTarget.elements.days.value;console.log(t),console.dir(n),getWeather(t,n).then((function(e){return list.innerHTML=createMarkup(e.forecast.forecastday)})).catch((function(e){return console.log(e)}))}function getWeather(e,t){var n="".concat(BASE_URL).concat(END_POINT,"?key=ce2cb9b2a3da414bb5b172546231704&q=").concat(e,"&days=").concat(t,"&$lang=uk");return fetch(n).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}function createMarkup(e){return e.map((function(e){var t=e.date,n=e.day,c=n.avgtemp_c,r=n.condition,a=r.icon,o=r.text;return' <li class="weatheritem">\n        <img src="'.concat(a,'" alt="').concat(o,'">\n        <p>').concat(o,"</p>\n        <h2>").concat(t,"</h2>\n        <h3>").concat(c,"</h3>\n    </li>")})).join("")}form.addEventListener("submit",onSearch);
//# sourceMappingURL=weater.b0ebf9e1.js.map