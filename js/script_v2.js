/* Zadania na lekcję:

Zaimplementuj funkcjonalność, że po wypełnieniu formularza i kliknięciu przycisku "Potwierdź" -
nowy film zostanie dodany do listy. Strona nie powinna się odświeżać.
Nowy film powinien być dodany do movieDB.movies.
Aby uzyskać dostęp do wartości input - odwołujemy się do niej jako do input.value;
PS. Istnieje kilka sposobów rozwiązania zadania, każde działające rozwiązanie jest akceptowane.

Jeśli nazwa filmu jest dłuższa niż 21 znaków - przyciąć ją i dodać trzy kropki

Po kliknięciu na kosz - element zostanie usunięty z listy (trudno)

Jeśli pole wyboru "Ulubione" jest zaznaczone - w konsoli wyświetli się komunikat:
"Dodajemy ulubiony film"

Filmy powinny być posortowane alfabetycznie */



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

ads.forEach(item => {
    item.remove();
});

genre.textContent = "Драма"

poster.style.background = "url('../img/bg.jpg') center center/cover no-repeat";

movieList.innerHTML = '';

movieDB.movies.sort();


movieDB.movies.forEach((element, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">
        ${i+1} ${element}
        <div class="delete"></div>
    </li>`;
}) 
