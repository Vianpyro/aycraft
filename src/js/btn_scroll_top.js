const btn_scroll_top = document.getElementById("btn_scroll_top");

btn_scroll_top.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        right: 0,
        behavior: "smooth"
    });
});

window.onscroll = function() {
    if (pageYOffset >= 500) {
        document.getElementById("btn_scroll_top").style.visibility = "visible";
    } else {
        document.getElementById("btn_scroll_top").style.visibility = "hidden";
    }
};
