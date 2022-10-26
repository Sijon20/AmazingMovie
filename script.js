let features_headline = document.getElementById('features_headline');
let movie_news = document.getElementById('movie_news');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef53590809msh14d61dddd35272fp1fce04jsn6ac40ed83c8d',
		'X-RapidAPI-Host': 'myallies-breaking-news-v1.p.rapidapi.com'
	}
};

 async function news (){

  let response = await fetch('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=de956870374a4e9a88c176aefc84a70d');
	let data = await response.json();
    console.log(data);
    ihtml = '';
    // for (let i = 0; i < 6; i++) {
    //     ihtml += ` <div class="card mx-lg-4 my-4 justify-content-md-center  d-md-flex" style="width: 24rem;">
    //     <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">${articles[i].description}</h5>
    //       <p class="card-text">${articles[i].title}</p>
    //       <a href="${articles[i].url}" class="btn btn-primary">Read</a>
    //     </div>
    //   </div>
    //   `
    //     movie_news.innerHTML = ihtml;
    // }
}
//catch error
news().catch(err => console.log('err'));
news.call();