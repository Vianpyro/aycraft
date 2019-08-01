const bnt_scroll_top = document.getElementById("bnt_scroll_top");

bnt_scroll_top.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        right: 0,
        behavior: "smooth"
    });
});

window.onscroll = function() {
    if (pageYOffset >= 500) {
        document.getElementById("bnt_scroll_top").style.visibility = "visible";
    } else {
        document.getElementById("bnt_scroll_top").style.visibility = "hidden";
    }
};
