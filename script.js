let features_headline = document.getElementById('features_headline');
let movie_news = document.getElementById('movie_news');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ef53590809msh14d61dddd35272fp1fce04jsn6ac40ed83c8d',
        'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
    }
};

async function news() {

    let response = await fetch('https://real-time-news-data.p.rapidapi.com/top-headlines?country=in&lang=en', options);
    let data = await response.json();
    console.log(data,);
    ihtml = '';
    for (let i = 0; i < 6; i++) {
        ihtml += ` <div class="card mx-lg-4 my-4 justify-content-md-center  d-md-flex" style="width: 24rem;">
        <img src="${data[i].photo_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[i].description}</h5>
          <p class="card-text">${data[i].title}</p>
          <a href="${data[i].url}" class="btn btn-primary">Read</a>
        </div>
      </div>
      `
        movie_news.innerHTML = ihtml;
    }
}
//catch error
news().catch(err => console.log('err'));
news();