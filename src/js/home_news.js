let MAX_NB_NEWS = 20;

let translateLang = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2) || "";
let translationList = ["en", "fr"];
let isTranslationAvailable = translationList.includes(translateLang);

function getDate() {
    let d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = "" + d.getFullYear();

    if (month.length < 2) {
        month = "0" + month;
    }
    if (day.length < 2) {
        day = "0" + day;
    }

    return [year, month, day].join("-");
}
console.info("Today is the " + getDate());

async function updateNews() {
    try {
        const data = new Request(`./src/json/news.json`);
        const { news } = await fetch(data).then(data => data.json());
        news.slice(0, MAX_NB_NEWS).forEach((element, i) => {
            console.log("Translating news into " + translateLang);
            if (element.available === "true") {
                if (element.date === getDate()) {
                    switch (translateLang) {
                        case "fr":
                            document.getElementById("news").innerHTML += `<figure id='data_news_${i}of${MAX_NB_NEWS}'><a href='${element.href}' target='${element.target}'><img src='${element.image}' class='${element.image_type}'>
                                <figcaption><strong>Nouveau!</strong> ${element.title.fr}</figcaption></a></figure>`;
                            break;
                        default:
                            document.getElementById("news").innerHTML += `<figure id='data_news_${i}of${MAX_NB_NEWS}'><a href='${element.href}' target='${element.target}'><img src='${element.image}' class='${element.image_type}'>
                                <figcaption><strong>New!</strong> ${element.title.en}</figcaption></a></figure>`;
                    }
                } else {
                    switch (translateLang) {
                        case "fr":
                            document.getElementById("news").innerHTML += `<figure id='data_news_${i}of${MAX_NB_NEWS}'><a href='${element.href}' target='${element.target}'><img src='${element.image}' class='${element.image_type}'>
                                <figcaption>${element.title.fr}</figcaption></a></figure>`;
                            break;
                        default:
                            document.getElementById("news").innerHTML += `<figure id='data_news_${i}of${MAX_NB_NEWS}'><a href='${element.href}' target='${element.target}'><img src='${element.image}' class='${element.image_type}'>
                                <figcaption>${element.title.en}</figcaption></a></figure>`;
                    }
                }
            }
        });
    } catch (err) {
        console.error(err);
    }
}

getDate();
updateNews();
