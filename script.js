// goggle Login Systeam ---------------------------------------------------------->
gapi.load('auth2', function() {
  gapi.auth2.init();
});
async function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  console.log("sing in");
  }
  
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

//helo
//--------------------------------------Movie News SEC------------------------------------------------------------------->
// Movie News api genretor----------------------------------->
// let features_headline = document.getElementById('features_headline');
// let movie_news = document.getElementById('movie_news');
// let movie_Api_key = 'de956870374a4e9a88c176aefc84a70d';
// let movie_url = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=" + movie_Api_key;
// async function getMovieNews() {
//     let response = await fetch(movie_url);
//     let data = await response.json();
//     let articles = await data['articles'];
//     ihtml = '';
//     for (let i = 0; i < 6; i++) {
//         ihtml += ` <div class="card mx-lg-4 my-4 justify-content-md-center  d-md-flex" style="width: 24rem;">
//         <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${articles[i].description}</h5>
//           <p class="card-text">${articles[i].title}</p>
//           <a href="${articles[i].url}" class="btn btn-primary">Read</a>
//         </div>
//       </div>
//       `
//         movie_news.innerHTML = ihtml;
//     }

// }
// //cath error
// getMovieNews().catch((error) => {
//     console.log(error);
// })
// // main Movie News api genretor----------------------------------->
// let movie_main = document.getElementById('movie_main');
// async function getMovieMain() {
//     let response = await fetch(movie_url);
//     let data = await response.json();
//     let articles = await data['articles'];
//     ihtml = '';
//     for (let i = 0; i < articles.length; i++) {
//         ihtml += ` <div class="card mx-lg-4 my-4 justify-content-md-center  d-md-flex" style="width: 24rem;">
//         <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${articles[i].description}</h5>
//           <p class="card-text">${articles[i].title}</p>
//           <a href="${articles[i].url}" class="btn btn-primary">Read</a>
//         </div>
//       </div>
//       `
//         movie_main.innerHTML = ihtml;
//     }

// }
// getMovieMain().catch((error) => {
//     console.log(error);
// })
// // if index.html is lodad then run getMovieNews function else if movie_news.html is lodad then run getMovieMain function
// if (features_headline) {
//     getMovieNews();
// } else if (movie_main) {
//     getMovieMain();
// }
// function more_news_button() {
//     window.location.href = "movie_news.html";
// }
// //--------------------------------------------------------------------------------------------------------->


window.onload = function () {
    console.log("Under Construction");
}
