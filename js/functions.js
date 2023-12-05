
/*cuando hagamos click en .buttom .nav toggle "activo"*/
const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
/*cuando haga click en .contenido, a la etiqueda .bar le añado y le quito 'acticvo'*/
let button2 = document.querySelector('contenido');
let bar = document.querySelector('.bar');
let sonido = new Audio('./multimedia/sound/staring.mp3');

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')

})

/*my star*/
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length = 6]);
}

