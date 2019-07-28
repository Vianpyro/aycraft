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
    ipButton.innerHTML = 'Copied: "' + copyText.value + '" to clipboard.';
}

function outIp() {
    var ipButton = document.getElementById("ipButton");
    ipButton.innerHTML = "Copy";
}
