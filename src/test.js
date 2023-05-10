const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('.header__box');
const logotextEl = document.querySelector('.logo__text');
const toggleEl = document.querySelector('#toggle');
const registrEl=document.querySelector('.register')
toggleEl.addEventListener('click', onclickToggleEl);

function onclickToggleEl(event) {
    console.log(event.currentTarget)
    bodyEl.classList.toggle('dark-theme');
    headerEl.classList.toggle('dark');
    logotextEl.classList.toggle('dark__icon')
    registrEl.classList.toggle('dark-theme');
}

// категорії запит
const section = document.querySelector('.category')
const main=document.querySelector('.main')
// const guard=document.querySelector('js-guard')
console.log(section)


async function getCategory() {
    const response = await fetch(`https://books-backend.p.goit.global/books/category-list`)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}

function createCategory() {
    getCategory().then(data => { console.log(data); section.innerHTML = markupCategory(data) });
   

}

 createCategory()

function markupCategory(arr) {
    return arr.map(({ list_name }) => `<a href="">
    <div class="category__book--name"> '${list_name}'</div></a>`).join('')
}


 async function getBookCategory() {
     const response = await fetch('https://books-backend.p.goit.global/books/top-books')
     if (!response.ok) {
         throw new Error(response.statusText)
     }
     return await response.json()
    
    
}

getBookCategory().then((data ) => {
    console.log(markupBook(data[0].books));
    
    main.innerHTML=markupBook((data[0].books))
})

function markupBook(arr) {
    return arr.map(({ author, book_image, title }) =>`
   
    <ul>
            <li><a href="">
                <img src="${book_image}" alt="${title}">
                <h3>"${title}"</h3>
                <p>"${author}"</p>
                </a>
            </li>
        </ul>`).join('')
}

let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}
entries.forEach(entry => {
        
        entry.isIntersecting;     // intersecting: true or false
    });

let observer = new IntersectionObserver(callback, options);

var target = document.querySelector('#js-guard');
observer.observe(target);
