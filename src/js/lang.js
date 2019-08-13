let userLang = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2) || "";
let langList = ["en", "fr"];
let isLanguageAvailable = langList.includes(userLang);

if (isLanguageAvailable) {
    var myRequest = new Request(`../../src/lang/${userLang}.json`);
    console.info(`User language (${userLang}) is available`);
} else {
    var myRequest = new Request("../../src/lang/en.json");
    console.info(`The user language (${userLang}) is unfortunately not available`);
}
console.log(myRequest);

fetch(myRequest)
    .then(resp => {
        console.log(resp.ok); // returns true if the response returned successfully
        resp.json()
            .then(data => {
                document.getElementById("lang-header_serverip_text").innerHTML = data.header_serverip_text;
                document.getElementById("lang-header_serverip_copyBtn").innerHTML = data.header_serverip_copy_btn;
                document.getElementById("lang-header_menu_home").innerHTML = data.header_menu_home;
                document.getElementById("lang-header_menu_games").innerHTML = data.header_menu_games;
                document.getElementById("lang-header_menu_rules").innerHTML = data.header_menu_rules;
                document.getElementById("lang-header_menu_support").innerHTML = data.header_menu_support;
            })
            .catch(err => {
                console.error(err);
            });
    })
    .catch(err => {
        console.error(err);
    });
