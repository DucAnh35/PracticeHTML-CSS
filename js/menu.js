window.onscroll = function () {
    myHeader();
}
var header = document.getElementById('p-page-header');
var sticky = header.offsetTop;
function myHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
document.getElementById('p-togger').onclick = function () {
    toggerMenu();
}
function toggerMenu() {
    var x = document.getElementById('top-menu');
    if (x.className === 'p-page-nav') {
        x.className += ' responsive';
    } else {
        x.className = 'p-page-nav'
    }
}


