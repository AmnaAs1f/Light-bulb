let bulbon = document.querySelector('.on');
let bulboff = document.querySelector('.off');
let image = document.querySelector('.bulb');


bulbon.addEventListener('click' , function (){
    image.src = 'img/pic_bulbon.gif';
});

bulboff.addEventListener('click' , function (){
    image.src = 'img/pic_bulboff.gif';
});