//initialize - set up variables
var counter = document.getElementById('counter');
var person = document.getElementById('person');
var audio = document.getElementById('mySound');
var fromTop = window.pageYOffset;

counter.innerHTML = 'Hello!';
audio.preload = "auto";


//pseudocode - when the user is scrolling update the variable fromTop and make decisions to change stuff on the page
//window.onscroll <- boolean (yes/no)

window.onscroll = function (){
  //when the user scrolls, do all of this..

    fromTop = window.pageYOffset;
    //test if it works
    console.log(fromTop);

    counter.style.top = 50 + fromTop + "px";

    if (fromTop < 1000){
      counter.innerHTML = "Hello!";
      music.style.backgroundImage = "none";
      person.style.backgroundImage = "none";
      audio.src = "none";
    } if (fromTop > 1000){
      counter.innerHTML = "Rock?";
      music.style.backgroundImage = "none";
      person.style.backgroundImage = "none";
      audio.src = "none";
    }if (fromTop > 2000){
      counter.innerHTML = "The 50s";
      music.style.backgroundImage = "url(images/musicbg.png)";
      person.style.backgroundImage = "url(images/elvis.svg)";
      audio.src = "audio/elvis.ogg";
    } if (fromTop > 3000){
      counter.innerHTML = "The 60s";
      music.style.backgroundImage = "url(images/musicbg.png)";
      person.style.backgroundImage = "url(images/johnlennon.svg)";
      audio.src = "audio/beatles.ogg";
    } if (fromTop > 4000){
      counter.innerHTML = "The 70s";
      music.style.backgroundImage = "url(images/musicbg.png)";
      person.style.backgroundImage = "url(images/ledzeppelin.svg)";
      audio.src = "audio/ledzeppelin.ogg";
    } if (fromTop > 5000){
      counter.innerHTML = "The 80s";
      music.style.backgroundImage = "url(images/musicbg.png)";
      person.style.backgroundImage = "url(images/gunsnroses.svg)";
      audio.src = "audio/gunsnroses.ogg";
    } if (fromTop > 6000){
      counter.innerHTML = "The 90s";
      music.style.backgroundImage = "url(images/musicbg.png)";
      person.style.backgroundImage = "url(images/nirvana.svg)";
      audio.src = "audio/nirvana.ogg";
    } if (fromTop > 7000){
      counter.innerHTML = "2000s";
      music.style.backgroundImage = "url(images/musicbg.png)";
      person.style.backgroundImage = "url(images/linkinpark.svg)";
      audio.src = "audio/linkinpark.ogg";
    } if (fromTop > 8000){
      counter.innerHTML = "NOW";
      music.style.backgroundImage = "url(images/musicbg.png)";
      person.style.backgroundImage = "url(images/twentyonepilots.svg)";
      audio.src = "audio/twentyonepilots.ogg";
    }
}

window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

var bgbanner = document.getElementById('bg-banner')
var bgbanner2 = document.getElementById('bg-banner2')
var rockinfo = document.getElementById('rockinfo')
var fiftybg = document.getElementById('fiftybg')
var fiftyinfo = document.getElementById('fiftyinfo')
var sixtybg = document.getElementById('sixtybg')
var sixtyinfo = document.getElementById('sixtyinfo')
var seventybg = document.getElementById('seventybg')
var seventyinfo = document.getElementById('seventyinfo')
var eightybg = document.getElementById('eightybg')
var eightyinfo = document.getElementById('eightyinfo')
var ninetybg = document.getElementById('ninetybg')
var ninetyinfo = document.getElementById('ninetyinfo')
var oobg = document.getElementById('oobg')
var ooinfo = document.getElementById('ooinfo')
var currentbg = document.getElementById('currentbg')
var currentinfo = document.getElementById('currentinfo')

function parallaxbubbles(){
 var scrolltop = window.pageYOffset
 bgbanner.style.top = -scrolltop * .4 + 50 + 'px'
 bgbanner2.style.top = -scrolltop * .2 + 60 + 'px'
 rockinfo.style.top = -scrolltop * .2 + 1700 + 'px'
 fiftybg.style.top = -scrolltop * .2 + 2900 + 'px'
 fiftyinfo.style.top = -scrolltop * .3 + 2800 + 'px'
 sixtybg.style.top = -scrolltop * .2 + 3900 + 'px'
 sixtyinfo.style.top = -scrolltop * .3 + 4050 + 'px'
 seventybg.style.top = -scrolltop * .2 + 5200 + 'px'
 seventyinfo.style.top = -scrolltop * .3 + 5300 + 'px'
 eightybg.style.top = -scrolltop * .2 + 6300 + 'px'
 eightyinfo.style.top = -scrolltop * .3 + 6600 + 'px'
 ninetybg.style.top = -scrolltop * .2 + 7600 + 'px'
 ninetyinfo.style.top = -scrolltop * .3 + 7900 + 'px'
 oobg.style.top = -scrolltop * .2 + 8850 + 'px'
 ooinfo.style.top = -scrolltop * .3 + 9200 + 'px'
 currentbg.style.top = -scrolltop * .2 + 10250 + 'px'
 currentinfo.style.top = -scrolltop * .3 + 10700 + 'px'
}

window.addEventListener('scroll', function(){
 requestAnimationFrame(parallaxbubbles)
}, false)

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',3);
	}
	else clearTimeout(timeOut);
}
