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
    if (data[i].photo_url == null) {
      data[i].photo_url = 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg';
    }
    }
    ihtml += ` <div class="card mx-lg-4 my-4 justify-content-md-center  d-md-flex" style="width: 24rem;">
        <img src="${photo}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${data[i].title}</h5>
           <a href="${data[i].sub_articles[0].link}" class="text-dark "> <p class="card-text"> Sub Title 1 =>${data[i].sub_articles[0].title}</p></a>
           <a href="${data[i].sub_articles[1].link}" class="text-dark "><p class="card-text"> Sub Title 2 =>${data[i].sub_articles[1].title}</p></a>
           <a href="${data[i].sub_articles[2].link}" class="text-dark"><p class="card-text"> Sub Title 3 =>${data[i].sub_articles[2].title}</p></a>
           <p class="card-text"> Publish Date${data[i].published_datetime_utc}</p>
          <a href="${data[i].link}" class="btn btn-primary">Read</a>
        </div>
  dark
      `
    movie_news.innerHTML = ihtml;
  }
//catch error
news().catch(err => console.log('err'));
news();