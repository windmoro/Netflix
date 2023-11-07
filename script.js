let numberOfFilms = +prompt('Neche kinoya baxmisiniz?');
let filim = prompt('Sonuncu baxdiginiz film nedir?');
let bal = +prompt('Bu kinonu neche bal ile qiymetlendirirsiniz? ');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        logan: filim,
        sogan: bal,


    },
    actors: {

    },
    genres: [],
    privat: false


}


   


let netice = `Baxdiginiz Kino Sayisi: ${personalMovieDB.count} ededir.Axrıncı baxdığınız film ${personalMovieDB.movies.logan} filmidir. ${filim} kinosunu ${personalMovieDB.movies.sogan} bal ile qiymetlendirirsiniz.`

document.getElementById('morro').innerHTML = netice;