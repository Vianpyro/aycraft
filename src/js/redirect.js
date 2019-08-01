let sysLang = navigator.language; // Récupère la langue du navigateur

switch (sysLang) {
    case "en-US":
    case "fr-CA":
    case "fr-FR":
        window.location = `./${sysLang}/index.html`;
        break;
    default:
        window.location = `./en-US/index.html`;
        break;
}
