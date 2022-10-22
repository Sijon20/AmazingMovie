//make for fun-------------------------------------------->
let movieimgurl = document.getElementById('movieimgurl');
//movie picture api genretor ----------------------------->
let API_KEY = '30754640-6e59048cfc14c14fcd077b2b6';
let movieurl = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('movie ') + "&image_type=photo&pretty=true";
async function getMovieImages() {
    let response = await fetch(movieurl);
    let data = await response.json();
    let hits = await data['hits'];
let random = Math.floor(Math.random() * hits.length);
    let imgurl =hits[random].largeImageURL;
    console.log(imgurl);
    return movieimgurl.style.backgroundImage = "url(" + imgurl + ")";
}
getMovieImages.call();
//------------------------------------------------------------>

//song picture api genretor----------------------------------->
let songimgurl =document.getElementById('songimgurl');
let Songurl = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('song ') + "&image_type=photo&pretty=true";
async function getSongImages() {
    let response = await fetch(Songurl);
    let data = await response.json();
    let hits = await data['hits'];
let random = Math.floor(Math.random() * hits.length);
    let imgurl =hits[random].largeImageURL;
    console.log(imgurl);
    return songimgurl.style.backgroundImage = "url(" + imgurl + ")";
}
getSongImages.call();
//------------------------------------------------------------>

//ui picture api genretor----------------------------------->
let uigurl = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('user interface ') + "&image_type=photo&pretty=true";
async function getUiImages() {
    let response = await fetch(uigurl);
    let data = await response.json();
    let hits = await data['hits'];
let random = Math.floor(Math.random() * hits.length);
    let imgurl =hits[random].largeImageURL;
    console.log(imgurl);
    return uiimgurl.style.backgroundImage = "url(" + imgurl + ")";
}
getUiImages.call();
//------------------------------------------------------------>
//------------------------------------------------------------>