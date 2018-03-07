//initialize - set up variables
var counter = document.getElementById('counter');
var person = document.getElementById('person');
var fromTop = window.pageYOffset;

counter.innerHTML = 'Home';



//pseudocode - when the user is scrolling update the variable fromTop and make decisions to change stuff on the page
//window.onscroll <- boolean (yes/no)

window.onscroll = function (){
  //when the user scrolls, do all of this..

    fromTop = window.pageYOffset;
    //test if it works
    console.log(fromTop);

    counter.style.top = 50 + fromTop + "px";

    if (fromTop < 1000){
      counter.innerHTML = "Home";
      counter.style.backgroundColor = "white";
      person.style.backgroundImage = "none";
    } if (fromTop > 1000){
      counter.innerHTML = "Rock Music";
      counter.style.backgroundColor = "red";
      person.style.backgroundImage = "none";
    }if (fromTop > 2000){
      counter.innerHTML = "The 50's";
      counter.style.backgroundColor = "orange";
      person.style.backgroundImage = "url(https://placeimg.com/500/500/animals)";
    } if (fromTop > 3000){
      counter.innerHTML = "The 60's";
      counter.style.backgroundColor = "yellow";
      person.style.backgroundImage = "url(https://placeimg.com/500/500/tech)";
    } if (fromTop > 4000){
      counter.innerHTML = "The 70's";
      counter.style.backgroundColor = "green";
      person.style.backgroundImage = "url(https://placeimg.com/500/500/animals)";
    } if (fromTop > 5000){
      counter.innerHTML = "The 80's";
      counter.style.backgroundColor = "skyblue";
      person.style.backgroundImage = "url(https://placeimg.com/500/500/tech)";
    } if (fromTop > 6000){
      counter.innerHTML = "The 90's";
      counter.style.backgroundColor = "blue";
      person.style.backgroundImage = "url(https://placeimg.com/500/500/animals)";
    } if (fromTop > 7000){
      counter.innerHTML = "2000's";
      counter.style.backgroundColor = "violet";
      person.style.backgroundImage = "url(https://placeimg.com/500/500/tech)";
    } if (fromTop > 8000){
      counter.innerHTML = "Current Scene";
      counter.style.backgroundColor = "brown";
      person.style.backgroundImage = "url(https://placeimg.com/500/500/animals)";
    }
}

window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

var bgbanner = document.getElementById('bg-banner')
var bgbanner2 = document.getElementById('bg-banner2')
//var rockpic = document.getElementById('rockpic')
var rockinfo = document.getElementById('rockinfo')

function parallaxbubbles(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
 bgbanner.style.top = -scrolltop * .4 + 50 + 'px' // move bubble1 at 20% of scroll rate
 bgbanner2.style.top = -scrolltop * .2 + 450 + 'px'
 //rockpic.style.top = -scrolltop * .1 + 1200 + 'px'
 rockinfo.style.top = -scrolltop * .2 + 1700 + 'px' // move bubble2 at 50% of scroll rate
}

window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)
