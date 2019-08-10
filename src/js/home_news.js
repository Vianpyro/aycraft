const MAX_NB_NEWS = 20;

async function updateNews() {
    try {
        const data = new Request(`./src/json/news.json`);
        const { news } = await fetch(data).then(data => data.json());
        news.slice(0, 20).forEach((element, i) => {
            if (element.available === "true") {
                document.getElementById("news").innerHTML += `<figure id='data_news_${i}of${MAX_NB_NEWS}'><a href='${element.href}' target='${element.target}'><img src='${element.image}' class='${element.image_type}'><figcaption>${
                    element.title
                }</figcaption></a></figure>`;
            }
        });
    } catch (err) {
        console.error(err);
    }
}

updateNews();
