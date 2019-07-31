let sysLang = navigator.language; // Récupère la langue du navigateur

let meta = document.head.querySelector('[http-equiv="refresh"]'); // récupère le meta qui nous intéresse

switch (sysLang) {
    case "en-US":
    case "fr-CA":
    case "fr-FR":
        meta.content += `./${sysLang}/index.html`; // Ajoute du text dans le content du meta
        break;
    default:
        meta.content += `./en-US/index.html`;
        break;
}
