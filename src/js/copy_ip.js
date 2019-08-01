let url = location.pathname;
let regex = /\/(\w{2}-\w{2})\//gm;
let match = regex.exec(url)[1];

function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
}

function copyIp() {
    var copyText = document.getElementById("ip");
    copyText.select();
    document.execCommand("copy");
    clearSelection();

    var ipButton = document.getElementById("ipButton");
    switch (match) {
        case "fr-CA":
        case "fr-FR":
            ipButton.innerHTML = 'Copié: "' + copyText.value + '" dans le presse-papier.';
            break;
        case "en-US":
            ipButton.innerHTML = 'Copied: "' + copyText.value + '" to clipboard.';
            break;
        default:
            ipButton.innerHTML = 'Copied: "' + copyText.value + '" to clipboard.';
            break;
    }
}

function outIp() {
    var ipButton = document.getElementById("ipButton");
    switch (match) {
        case "fr-CA":
        case "fr-FR":
            ipButton.innerHTML = "Copier";
            break;
        case "en-US":
            ipButton.innerHTML = "Copy";
            break;
        default:
            ipButton.innerHTML = "Copy";
            break;
    }
}
