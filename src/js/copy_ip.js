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
}

function outIp() {
    var ipButton = document.getElementById("ipButton");
}
