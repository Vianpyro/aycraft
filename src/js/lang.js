let userLang = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2) || "";
let langList = ["en", "fr"];
let isLanguageAvailable = langList.includes(userLang);

if (isLanguageAvailable) {
    var myRequest = new Request(`https://vianpyro.github.io/Aycraft/src/lang/${userLang}.json`);
    console.info(`User language (${userLang}) is available`);
} else {
    var myRequest = new Request("https://vianpyro.github.io/Aycraft/src/lang/en.json");
    console.info(`The user language (${userLang}) is unfortunately not available`);
}
console.log(window.location.pathname);

fetch(myRequest)
    .then(resp => {
        console.log(resp.ok); // returns true if the response returned successfully
        resp.json()
            .then(data => {
                switch (window.location.pathname) {
                    case "Aycraft/index.html":
                        document.getElementById("lang-header_serverip_text").innerHTML = data.header.serverip.text;
                        document.getElementById("lang-header_serverip_copyBtn").innerHTML = data.header.serverip.copy_btn;
                        document.getElementById("lang-header_menu_home").innerHTML = data.header.menu.home;
                        document.getElementById("lang-header_menu_games").innerHTML = data.header.menu.games;
                        document.getElementById("lang-header_menu_rules").innerHTML = data.header.menu.rules;
                        document.getElementById("lang-header_menu_support").innerHTML = data.header.menu.support;
                        break;
                    case "Aycraft/pages/rules.html":
                        document.getElementById("lang-header_serverip_text").innerHTML = data.header.serverip.text;
                        document.getElementById("lang-header_serverip_copyBtn").innerHTML = data.header.serverip.copy_btn;
                        document.getElementById("lang-header_menu_home").innerHTML = data.header.menu.home;
                        document.getElementById("lang-header_menu_games").innerHTML = data.header.menu.games;
                        document.getElementById("lang-header_menu_rules").innerHTML = data.header.menu.rules;
                        document.getElementById("lang-header_menu_support").innerHTML = data.header.menu.support;
                        document.getElementById("lang-rules_title").innerHTML = data.rules.title;
                        document.getElementById("lang-rules_texts_p1_basic_principles").innerHTML = data.rules.texts.p1.basic_principles;
                        document.getElementById("lang-rules_texts_p1_n1").innerHTML = data.rules.texts.p1.n1;
                        document.getElementById("lang-rules_texts_p1_n2").innerHTML = data.rules.texts.p1.n2;
                        document.getElementById("lang-rules_texts_p2_behaviour_play").innerHTML = data.rules.texts.p2.behaviour_play;
                        break;
                    default:
                        break;
                }
            })
            .catch(err => {
                console.error(err);
            });
    })
    .catch(err => {
        console.error(err);
    });
