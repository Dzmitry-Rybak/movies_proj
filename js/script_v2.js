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

document.addEventListener('DOMContentLoaded', () => {
    const ads = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      input = document.querySelector('.adding__input'),
      checkbox = document.querySelector('[type="checkbox"]');
      
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

addForm.addEventListener('submit', event => {
    event.preventDefault();
    
    let newFilm = input.value;
    
    
    if(newFilm) {

        if (checkbox.checked) {
            console.log('Dodajemy ulubiony film');
        }

        if (newFilm.length > 18) {
            newFilm = newFilm.slice(0, 19) + '...';
        }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
    })

ads.forEach(item => {
    item.remove();
});

genre.textContent = "Драма"
poster.style.background = "url('../img/bg.jpg') center center/cover no-repeat";

function sortArr (arr) {
    arr.sort();
}

function createMovieList (list, parent) {
    parent.innerHTML = '';
    sortArr(movieDB.movies);

    list.forEach((element, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">
            ${i+1} ${element}
            <div class="delete"></div>
        </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            list.splice(i, 1);

            createMovieList(list, parent);
        });
    });
    
}

    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
})