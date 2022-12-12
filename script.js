// Scroll to Top

let toTop = document.getElementById("toTop");

window.onscroll = function () {
    if (document.body.scroll > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
};

toTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
