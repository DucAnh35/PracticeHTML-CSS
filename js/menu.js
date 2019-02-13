window.onscroll = function () {
    myHeader();
}
var header = document.getElementById('b-page-header');
var sticky = header.offsetTop;
function myHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
document.getElementById('b-togger').onclick = function () {
    toggerMenu();
}
function toggerMenu() {
    var x = document.getElementById('top-menu');
    if (x.className === 'b-page-nav') {
        x.className += ' responsive';
    } else {
        x.className = 'b-page-nav'
    }
}


