let news = new Request(`./src/json/news.json`);

fetch(news)
    .then(resp => {
        resp.json()
            .then(data => {
                generateNews(20);
            })
            .catch(err => {
                console.error(err);
            });
    })
    .catch(err => {
        console.error(err);
    });

function generateNews(int) {
    for (i = 0; i >= int; i++) {
        if (data.news[i].available === "true") {
            // *****?????*****.innerHTML = '<figure id="data_news"' + i + int + '><a href="' + data.news[i].href + '"><img src="' + data.news[i].image + '" alt="' + data.news[i].title + '" class="' + data.news[i].image_type + '" /><figcaption>' + data.news[i].title + '</figcaption></a></figure>';
        }
    }
}
