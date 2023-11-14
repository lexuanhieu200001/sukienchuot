let img1;
img1 = document.getElementById('anh')
function init() {
    img1 = document.getElementById('anh');
    img1.style.position = 'relative';
    img1.style.left = '0px';
}
function run() {
    img1.style.left = parseInt(img1.style.left) + 10 + 'px';
}
window.onload = init;