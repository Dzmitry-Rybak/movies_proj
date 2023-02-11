/* 

1) Usuń wszystkie jednostki reklamowe ze strony (prawa strona witryny)

2) Zmień gatunek filmu, Zmień "komedię " na"dramat"

3) Zmień tło plakatu filmowego na obraz " bg.jpg". Znajduje się w folderze img.
Zaimplementuj tylko za pomocą JS

4) Lista filmów na stronie Generuj na podstawie danych z tego pliku JS.
Posortuj je alfabetycznie

5) Dodaj numerację wyświetlanych filmów */


'use strict';
const ads = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');
      
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Remote all ads
ads.forEach(item => {
    item.remove();
});

// 2) Change genre
genre.textContent = "Драма"

// 3) Change backbround img
poster.style.background = "url('../img/bg.jpg') center center/cover no-repeat";

movieList.innerHTML = '';

// Sorting the list of movies
movieDB.movies.sort();

// 4, 5) Сreating a list of films from an object movieDB

movieDB.movies.forEach((element, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">
        ${i+1} ${element}
        <div class="delete"></div>
    </li>`;
}) 
