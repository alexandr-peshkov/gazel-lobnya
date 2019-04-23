window.onload = function () {

    document.querySelector('.icon-menu').onclick = menuOpen;
    document.querySelector('.close').onclick = menuClose;

    function menuOpen() {
        document.querySelector('.header-menu').style.right = "0";
    }
    function menuClose() {
        document.querySelector('.header-menu').style.right = "-500px";
    }
}
