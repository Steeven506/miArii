
/*cuando hagamos click en .buttom .nav toggle "activo"*/
const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
/*cuando haga click en .contenido, a la etiqueda .bar le añado y le quito 'acticvo'*/
let button2 = document.querySelector('contenido');
let bar = document.querySelector('.bar');

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')

})


/*Ejecutar staring cuando se haga clic en la imagen de home*/
let sonido = new Audio('./multimedia/sound/staring.mp3');



/*my star*/
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length = 6]);
}

/*---------------------- CANCIONES QUE LE GUSTAN --------------------------*/
/*Declaracion variables */
let dissolve = new Audio('../multimedia/sound/joji/dissolve.mp3');
let willHe = new Audio('../multimedia/sound/joji/willHe.mp3');
let daylight = new Audio('../multimedia/sound/joji/daylight.mp3');
let iAmFreestyle = new Audio('../multimedia/sound/joji/freestyle.mp3');
let loveUsAgain = new Audio('../multimedia/sound/joji/loveUsAgain.mp3');

/*Ejecutar play */
loveUsPlay.addEventListener('click', ()=>{
    loveUsAgain.play();
    dissolve.pause();
    willHe.pause();
    daylight.pause();
    iAmFreestyle.pause();
    daylight.currentTime = 0;
    dissolve.currentTime = 0;
    willHe.currentTime = 0;
    iAmFreestyle.currentTime = 0;
})

dissolvePlay.addEventListener('click', ()=>{
    dissolve.play();
    loveUsAgain.pause();
    willHe.pause();
    daylight.pause();
    iAmFreestyle.pause();
    daylight.currentTime = 0;
    loveUsAgain.currentTime = 0;
    willHe.currentTime = 0;
    iAmFreestyle.currentTime = 0;
})

willHePlay.addEventListener('click', ()=>{
    willHe.play();
    loveUsAgain.pause();
    dissolve.pause();
    daylight.pause();
    iAmFreestyle.pause();
    daylight.currentTime = 0;
    loveUsAgain.currentTime = 0;
    dissolve.currentTime = 0;
    iAmFreestyle.currentTime = 0;
})

daylightPlay.addEventListener('click', ()=>{
    daylight.play();
    loveUsAgain.pause();
    loveUsAgain.currentTime = 0;
    dissolve.pause();
    dissolve.currentTime = 0;
    willHe.pause();
    willHe.currentTime = 0;
    iAmFreestyle.pause();
    iAmFreestyle.currentTime = 0;
})

freePlay.addEventListener('click', ()=>{
    iAmFreestyle.play();
    loveUsAgain.pause();
    dissolve.pause();
    willHe.pause();
    daylight.pause();
    daylight.currentTime = 0;
    loveUsAgain.currentTime = 0;
    dissolve.currentTime = 0;
    willHe.currentTime = 0;
})

/*ejecutar pausa */
loveUsPause.addEventListener('click', ()=>{
    loveUsAgain.pause();
    daylight.currentTime = 0;
    loveUsAgain.currentTime = 0;
    dissolve.currentTime = 0;
    willHe.currentTime = 0;
    iAmFreestyle.currentTime = 0;
})

dissolvePause.addEventListener('click', ()=>{
    dissolve.pause();
    daylight.currentTime = 0;
    loveUsAgain.currentTime = 0;
    dissolve.currentTime = 0;
    willHe.currentTime = 0;
    iAmFreestyle.currentTime = 0;
})

willHePause.addEventListener('click', ()=>{
    willHe.pause();
    daylight.currentTime = 0;
    loveUsAgain.currentTime = 0;
    dissolve.currentTime = 0;
    willHe.currentTime = 0;
    iAmFreestyle.currentTime = 0;
})

daylightPause.addEventListener('click', ()=>{
    daylight.pause();
    daylight.currentTime = 0;
    loveUsAgain.currentTime = 0;
    dissolve.currentTime = 0;
    willHe.currentTime = 0;
    iAmFreestyle.currentTime = 0;
})

freePause.addEventListener('click', ()=>{
    iAmFreestyle.pause();
    daylight.currentTime = 0;
    loveUsAgain.currentTime = 0;
    dissolve.currentTime = 0;
    willHe.currentTime = 0;
    iAmFreestyle.currentTime = 0;
})

const cards = document.querySelector('.cards');
const punto = document.querySelectorAll('.punto');
//cuando hagamos click en punto
    //saber la posicion del punto
    //QUITAR la clase activo de todos los puntos
    //AÑADIR la clase activo a todos los puntos en los que hayamos hecho click
punto.forEach( (cadaPunto, i)=>{
    punto[i].addEventListener('click',()=>{
        let position = i;
        //position es 0 el transform x es 0
        //position es 1 el transform x es -20%
        //operacion = position * -20%
        let operation = 0;
        operation = (position * -20)+operation;
        cards.style.transform = `translateX(${ operation }%)`;
        punto.forEach((cadaPunto, i) =>{
            punto[i].classList.add('activo')
        } )
    })
})
