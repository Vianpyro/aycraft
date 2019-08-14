let userLang = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2) || "";
let langList = ["en", "fr"];
let isLanguageAvailable = langList.includes(userLang);

if (isLanguageAvailable) {
    var myRequest = new Request(`https://vianpyro.github.io/Aycraft/src/lang/${userLang}.json`); // This one should active on GitHub
    // var myRequest = new Request(`../src/lang/${userLang}.json`); // This one is used for tests
    console.info(`User language (${userLang}) is available`);
} else {
    var myRequest = new Request("https://vianpyro.github.io/Aycraft/src/lang/en.json");
    console.info(`The user language (${userLang}) is unfortunately not available`);
}
console.log(myRequest);

fetch(myRequest)
    .then(resp => {
        console.log(resp.ok); // returns true if the response returned successfully
        resp.json()
            .then(data => {
                document.getElementById("lang-header_serverip_text").innerHTML = data.header.serverip.text;
                document.getElementById("lang-header_serverip_copyBtn").innerHTML = data.header.serverip.copy_btn;
                document.getElementById("lang-header_menu_home").innerHTML = data.header.menu.home;
                document.getElementById("lang-header_menu_games").innerHTML = data.header.menu.games;
                document.getElementById("lang-header_menu_rules").innerHTML = data.header.menu.rules;
                document.getElementById("lang-header_menu_support").innerHTML = data.header.menu.support;
                document.getElementById("lang-rules_title").innerHTML = data.rules.title;
                document.getElementById("lang-rules_texts_p1_basic_principles").innerHTML = data.rules.texts.p1.basic_principles;
                document.getElementById("lang-rules_texts_p1_behaviour_play").innerHTML = data.rules.texts.p1.behaviour_play;
            })
            .catch(err => {
                console.error(err);
            });
    })
    .catch(err => {
        console.error(err);
    });
