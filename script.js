/* =====================================
   PREMIUM BIRTHDAY WEBSITE
   PART 1 - SCRIPT.JS
===================================== */

/* ---------- ELEMENTS ---------- */

const loader = document.getElementById("loader");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

const scrollBtn = document.getElementById("scrollBtn");

const tree = document.getElementById("tree");

const hearts = document.querySelectorAll(".heart");

const gift = document.getElementById("giftBox");

const letter = document.getElementById("letter");

const celebrateBtn = document.getElementById("celebrate");

/* ---------- START WEBSITE ---------- */

startBtn.addEventListener("click", () => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},700);

music.play().catch(()=>{});

});

/* ---------- SMOOTH SCROLL ---------- */

scrollBtn.addEventListener("click", () => {

document.getElementById("treeSection").scrollIntoView({

behavior:"smooth"

});

});

/* ---------- HEART TREE ---------- */

hearts.forEach((heart)=>{

heart.addEventListener("click",(e)=>{

heart.style.transform="scale(1.6)";
heart.style.filter="drop-shadow(0 0 20px pink)";

setTimeout(()=>{

heart.style.transform="scale(1)";
heart.style.filter="none";

},300);

createBloom(e.pageX,e.pageY);

});

});

/* ---------- BLOOM EFFECT ---------- */

function createBloom(x,y){

for(let i=0;i<15;i++){

const bloom=document.createElement("div");

bloom.innerHTML=["💖","💕","🤍","💘","💗"][Math.floor(Math.random()*5)];

bloom.style.position="absolute";
bloom.style.left=x+"px";
bloom.style.top=y+"px";
bloom.style.fontSize="24px";
bloom.style.pointerEvents="none";
bloom.style.transition="1s linear";

document.body.appendChild(bloom);

const dx=(Math.random()*240)-120;
const dy=(Math.random()*240)-120;

requestAnimationFrame(()=>{

bloom.style.transform=`translate(${dx}px,${dy}px) scale(1.5)`;

bloom.style.opacity="0";

});

setTimeout(()=>{

bloom.remove();

},1000);

}

}

/* ---------- GIFT ---------- */

gift.addEventListener("click",()=>{

gift.style.transform="scale(1.2) rotate(20deg)";

setTimeout(()=>{

gift.style.display="none";

letter.style.display="block";

letter.scrollIntoView({

behavior:"smooth"

});

},500);

});

/* ---------- GALLERY EFFECT ---------- */

const photos=document.querySelectorAll(".photos img");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

if(photo.classList.contains("zoom")){

photo.classList.remove("zoom");

photo.style.transform="scale(1)";

photo.style.zIndex="1";

}else{

photos.forEach(p=>{

p.classList.remove("zoom");

p.style.transform="scale(1)";

});

photo.classList.add("zoom");

photo.style.transform="scale(1.18)";

photo.style.zIndex="99";

}

});

});

/* ---------- FLOATING HEARTS ---------- */

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML=["❤️","💕","💖","💗","🤍"][Math.floor(Math.random()*5)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.transition="8s linear";

document.body.appendChild(heart);

requestAnimationFrame(()=>{

heart.style.transform="translateY(-120vh)";

heart.style.opacity="0";

});

setTimeout(()=>{

heart.remove();

},8000);

},700);

/* ---------- END OF PART 1 ---------- */
/* =====================================
   PART 2 - CELEBRATION EFFECTS
===================================== */

/* ---------- CONFETTI ---------- */

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});

let particles = [];

class Confetti{

constructor(){

this.x = Math.random()*canvas.width;
this.y = -20;

this.size = Math.random()*8+4;

this.speed = Math.random()*4+2;

this.angle = Math.random()*360;

this.color = [

"#ffb6c1",
"#ffd6e7",
"#ffffff",
"#ff69b4",
"#ffc0cb"

][Math.floor(Math.random()*5)];

}

update(){

this.y += this.speed;

this.x += Math.sin(this.angle)*1.5;

this.angle += 0.05;

}

draw(){

ctx.fillStyle=this.color;

ctx.beginPath();

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fill();

}

}

function startConfetti(){

canvas.style.display="block";

particles=[];

for(let i=0;i<250;i++){

particles.push(new Confetti());

}

animateConfetti();

setTimeout(()=>{

canvas.style.display="none";

},8000);

}

function animateConfetti(){

if(canvas.style.display!=="block") return;

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.update();

p.draw();

});

requestAnimationFrame(animateConfetti);

}

/* ---------- CELEBRATE BUTTON ---------- */

celebrateBtn.addEventListener("click",()=>{

startConfetti();

fireworks();

});

/* ---------- FIREWORKS ---------- */

function fireworks(){

for(let i=0;i<8;i++){

setTimeout(()=>{

explode(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight/2

);

},i*500);

}

}

function explode(x,y){

for(let i=0;i<45;i++){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=x+"px";

star.style.top=y+"px";

star.style.fontSize="20px";

star.style.pointerEvents="none";

star.style.transition="1s ease-out";

document.body.appendChild(star);

const dx=(Math.random()*320)-160;

const dy=(Math.random()*320)-160;

requestAnimationFrame(()=>{

star.style.transform=`translate(${dx}px,${dy}px) scale(2)`;

star.style.opacity="0";

});

setTimeout(()=>{

star.remove();

},1000);

}

}

/* ---------- CURSOR SPARKLES ---------- */

document.addEventListener("mousemove",(e)=>{

const spark=document.createElement("div");

spark.innerHTML="✨";

spark.style.position="fixed";

spark.style.left=e.clientX+"px";

spark.style.top=e.clientY+"px";

spark.style.fontSize="14px";

spark.style.pointerEvents="none";

spark.style.transition=".8s";

document.body.appendChild(spark);

requestAnimationFrame(()=>{

spark.style.transform="translateY(-30px) scale(1.8)";

spark.style.opacity="0";

});

setTimeout(()=>{

spark.remove();

},800);

});

/* ---------- DOUBLE CLICK HEART ---------- */

document.addEventListener("dblclick",(e)=>{

for(let i=0;i<20;i++){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.transition="1s";

document.body.appendChild(heart);

const dx=(Math.random()*250)-125;

const dy=(Math.random()*250)-125;

requestAnimationFrame(()=>{

heart.style.transform=`translate(${dx}px,${dy}px) scale(2)`;

heart.style.opacity="0";

});

setTimeout(()=>{

heart.remove();

},1000);

}

});

console.log("Birthday Project Loaded Successfully ❤️");
/* =====================================
   PART 6
   MUSIC + TYPING + COUNTDOWN + BALLOONS
===================================== */

/* ---------- MUSIC CONTROL ---------- */

const musicBtn = document.createElement("button");

musicBtn.innerHTML = "🎵";

musicBtn.id = "musicBtn";

document.body.appendChild(musicBtn);

musicBtn.style.cssText = `
position:fixed;
right:20px;
bottom:20px;
width:60px;
height:60px;
border:none;
border-radius:50%;
background:#ff7aa2;
color:white;
font-size:26px;
cursor:pointer;
box-shadow:0 10px 25px rgba(0,0,0,.2);
z-index:99999;
`;

let musicPlaying = false;

musicBtn.onclick = () => {

if(musicPlaying){

music.pause();

musicBtn.innerHTML="🔇";

}else{

music.play();

musicBtn.innerHTML="🎵";

}

musicPlaying=!musicPlaying;

};

/* ---------- TYPING EFFECT ---------- */

const heroTitle=document.querySelector(".hero h1");

const originalText=heroTitle.innerText;

heroTitle.innerHTML="";

let index=0;

function typeWriter(){

if(index<originalText.length){

heroTitle.innerHTML+=originalText.charAt(index);

index++;

setTimeout(typeWriter,90);

}

}

setTimeout(typeWriter,800);

/* ---------- COUNTDOWN ---------- */

const countdown=document.createElement("div");

countdown.id="countdown";

countdown.style.cssText=`
position:fixed;
left:20px;
bottom:20px;
background:rgba(255,255,255,.85);
padding:12px 18px;
border-radius:20px;
font-weight:bold;
color:#c86b88;
box-shadow:0 8px 20px rgba(0,0,0,.12);
z-index:9999;
`;

document.body.appendChild(countdown);

const birthday=new Date();

birthday.setHours(23,59,59);

function updateCountdown(){

const now=new Date();

const diff=birthday-now;

const h=Math.floor(diff/1000/60/60);

const m=Math.floor(diff/1000/60)%60;

const s=Math.floor(diff/1000)%60;

countdown.innerHTML=`⏳ ${h}h ${m}m ${s}s`;

}

setInterval(updateCountdown,1000);

/* ---------- BALLOONS ---------- */

function createBalloon(){

const balloon=document.createElement("div");

balloon.innerHTML=["🎈","🎈","🎈","🎉"][Math.floor(Math.random()*4)];

balloon.style.position="fixed";

balloon.style.left=Math.random()*100+"vw";

balloon.style.bottom="-80px";

balloon.style.fontSize=(40+Math.random()*20)+"px";

balloon.style.pointerEvents="none";

balloon.style.transition="12s linear";

document.body.appendChild(balloon);

requestAnimationFrame(()=>{

balloon.style.transform="translateY(-130vh)";

});

setTimeout(()=>{

balloon.remove();

},12000);

}

setInterval(createBalloon,1800);

/* ---------- WELCOME POPUP ---------- */

setTimeout(()=>{

const popup=document.createElement("div");

popup.innerHTML=`

<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background:white;
padding:30px;
border-radius:25px;
box-shadow:0 20px 50px rgba(0,0,0,.2);
text-align:center;
z-index:99999;
max-width:320px;
">

<h2 style="color:#c86b88;">🎂 Welcome ❤️</h2>

<p style="margin:15px 0;">
Hope this little surprise brings a smile to your face.
</p>

<button id="closePopup"
style="
padding:12px 25px;
border:none;
border-radius:30px;
background:#ff7aa2;
color:white;
cursor:pointer;
">
Continue
</button>

</div>
`;

document.body.appendChild(popup);

document.getElementById("closePopup").onclick=()=>{

popup.remove();

};

},2500);

console.log("Part 6 Loaded Successfully ❤️");
/* =====================================
   PART 7
   PREMIUM GIFT OPENING + MAGIC EFFECTS
===================================== */

/* ---------- MAGIC PARTICLES ---------- */

function createMagicParticles(x, y){

for(let i=0;i<40;i++){

const particle=document.createElement("div");

particle.innerHTML=["✨","⭐","💖","💕","🌸"][Math.floor(Math.random()*5)];

particle.style.position="fixed";
particle.style.left=x+"px";
particle.style.top=y+"px";
particle.style.fontSize=(18+Math.random()*12)+"px";
particle.style.pointerEvents="none";
particle.style.zIndex="99999";
particle.style.transition="1.5s ease-out";

document.body.appendChild(particle);

const dx=(Math.random()*400)-200;
const dy=(Math.random()*400)-200;

requestAnimationFrame(()=>{

particle.style.transform=`translate(${dx}px,${dy}px) rotate(${Math.random()*720}deg) scale(2)`;

particle.style.opacity="0";

});

setTimeout(()=>{

particle.remove();

},1500);

}

}

/* ---------- GIFT OPEN ANIMATION ---------- */

gift.addEventListener("click",()=>{

gift.style.transition="0.8s";

gift.style.transform="scale(1.4) rotate(360deg)";

gift.innerHTML="🎊";

createMagicParticles(
window.innerWidth/2,
window.innerHeight/2
);

setTimeout(()=>{

gift.style.display="none";

letter.style.display="block";

letter.style.opacity="0";

letter.style.transform="translateY(60px)";

letter.scrollIntoView({
behavior:"smooth"
});

setTimeout(()=>{

letter.style.transition="1.2s";

letter.style.opacity="1";

letter.style.transform="translateY(0px)";

},200);

},900);

});

/* ---------- ROSE PETALS ---------- */

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML=["🌸","🌺","🌹","💮"][Math.floor(Math.random()*4)];

petal.style.position="fixed";

petal.style.left=Math.random()*100+"vw";

petal.style.top="-50px";

petal.style.fontSize=(20+Math.random()*20)+"px";

petal.style.pointerEvents="none";

petal.style.transition="10s linear";

petal.style.zIndex="999";

document.body.appendChild(petal);

requestAnimationFrame(()=>{

petal.style.transform=`translateY(${window.innerHeight+200}px)
rotate(${Math.random()*720}deg)`;

petal.style.opacity="0.3";

});

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,1200);

/* ---------- SURPRISE MESSAGE ---------- */

function showSurprise(){

const box=document.createElement("div");

box.innerHTML=`

<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background:white;
padding:35px;
border-radius:30px;
text-align:center;
box-shadow:0 20px 50px rgba(0,0,0,.2);
z-index:999999;
max-width:350px;
">

<h2 style="color:#ff6fa0;">
🎂 Surprise ❤️
</h2>

<p style="
margin:20px 0;
line-height:1.8;
">

May your life always be filled with happiness,
love, success and beautiful memories.

Keep Smiling 😊🤍

</p>

<button id="closeSurprise"
style="
padding:12px 28px;
border:none;
border-radius:30px;
background:#ff7aa2;
color:white;
cursor:pointer;
">

Thank You 💖

</button>

</div>

`;

document.body.appendChild(box);

document.getElementById("closeSurprise").onclick=()=>{

box.remove();

};

}

setTimeout(showSurprise,15000);

/* ---------- HEART RAIN ---------- */

function heartRain(){

const heart=document.createElement("div");

heart.innerHTML=["❤️","💖","💕","💗","🤍","💘"][Math.floor(Math.random()*6)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-40px";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.transition="8s linear";

heart.style.zIndex="999";

document.body.appendChild(heart);

requestAnimationFrame(()=>{

heart.style.transform=`translateY(${window.innerHeight+100}px)
rotate(${Math.random()*720}deg)`;

heart.style.opacity="0";

});

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(heartRain,700);

console.log("Part 7 Loaded Successfully ❤️");
/* =====================================
   PART 8
   PHOTO LIGHTBOX + AUTO SLIDER
===================================== */

/* ---------- LIGHTBOX ---------- */

const galleryImages = document.querySelectorAll(".photos img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.92);
display:none;
justify-content:center;
align-items:center;
z-index:999999;
`;

const lightImg = document.createElement("img");

lightImg.style.cssText = `
max-width:90%;
max-height:90%;
border-radius:20px;
box-shadow:0 20px 60px rgba(255,255,255,.15);
transition:.4s;
`;

lightbox.appendChild(lightImg);

document.body.appendChild(lightbox);

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightImg.src=img.src;

lightbox.style.display="flex";

});

});

lightbox.onclick=()=>{

lightbox.style.display="none";

};

/* ---------- AUTO PHOTO SLIDER ---------- */

let currentPhoto=0;

setInterval(()=>{

galleryImages.forEach(img=>{

img.style.opacity=".4";
img.style.transform="scale(.95)";

});

galleryImages[currentPhoto].style.opacity="1";

galleryImages[currentPhoto].style.transform="scale(1.08)";

currentPhoto++;

if(currentPhoto>=galleryImages.length){

currentPhoto=0;

}

},3000);

/* ---------- MEMORY TIMELINE ---------- */

const gallery=document.querySelector(".gallery");

const title=document.createElement("h3");

title.innerHTML="📖 Our Memory Timeline";

title.style.textAlign="center";

title.style.marginTop="80px";

title.style.marginBottom="40px";

title.style.color="#c86b88";

title.style.fontSize="32px";

gallery.appendChild(title);

const timeline=document.createElement("div");

timeline.style.cssText=`
max-width:700px;
margin:auto;
display:flex;
flex-direction:column;
gap:25px;
`;

const memories=[

"🌸 The day we met.",

"😊 The first unforgettable smile.",

"📷 Beautiful memories together.",

"💖 Countless happy conversations.",

"🎂 Another wonderful birthday."

];

memories.forEach(text=>{

const item=document.createElement("div");

item.innerHTML=text;

item.style.cssText=`
background:white;
padding:18px;
border-left:6px solid #ff8db3;
border-radius:15px;
box-shadow:0 10px 25px rgba(0,0,0,.08);
font-size:18px;
`;

timeline.appendChild(item);

});

gallery.appendChild(timeline);

/* ---------- IMAGE HOVER GLOW ---------- */

galleryImages.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.boxShadow="0 0 35px rgba(255,105,180,.7)";

});

img.addEventListener("mouseleave",()=>{

img.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

});

});

/* ---------- RANDOM HEART POP ---------- */

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML=["💖","💕","💗","❤️","🤍"][Math.floor(Math.random()*5)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top=Math.random()*100+"vh";

heart.style.fontSize="28px";

heart.style.pointerEvents="none";

heart.style.transition="1.5s";

heart.style.zIndex="999";

document.body.appendChild(heart);

requestAnimationFrame(()=>{

heart.style.transform="scale(2)";

heart.style.opacity="0";

});

setTimeout(()=>{

heart.remove();

},1500);

},2500);

console.log("Part 8 Loaded Successfully ❤️");
/* =====================================
   PART 9
   GRAND FINALE
===================================== */

/* ---------- FINAL SURPRISE SCREEN ---------- */

function finalSurprise(){

const overlay=document.createElement("div");

overlay.id="finalOverlay";

overlay.style.cssText=`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:linear-gradient(180deg,#ffeff6,#fff8fb,#ffffff);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
z-index:9999999;
animation:fadeIn 1s;
`;

overlay.innerHTML=`

<h1 style="
font-family:'Playfair Display',serif;
font-size:60px;
color:#c86b88;
margin-bottom:20px;
">
🎂 Happy Birthday ❤️
</h1>

<p style="
max-width:700px;
font-size:22px;
line-height:2;
padding:20px;
color:#666;
">

May your smile always shine brighter than the stars.

May your heart always stay full of happiness.

May every dream come true.

✨ You deserve all the love in the world. ✨

</p>

<h2 style="
margin-top:20px;
font-size:34px;
color:#ff6f91;
">

Forever Special 🤍

</h2>

`;

document.body.appendChild(overlay);

launchFinalEffects();

}

/* ---------- STAR BURST ---------- */

function launchFinalEffects(){

for(let i=0;i<150;i++){

setTimeout(()=>{

const star=document.createElement("div");

star.innerHTML=["✨","⭐","🌟","💖"][Math.floor(Math.random()*4)];

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(20+Math.random()*20)+"px";

star.style.pointerEvents="none";

star.style.transition="2s";

star.style.zIndex="99999999";

document.body.appendChild(star);

requestAnimationFrame(()=>{

star.style.transform="scale(2.5) rotate(360deg)";

star.style.opacity="0";

});

setTimeout(()=>{

star.remove();

},2000);

},i*60);

}

}

/* ---------- BALLOON CELEBRATION ---------- */

function grandBalloons(){

for(let i=0;i<40;i++){

setTimeout(()=>{

const balloon=document.createElement("div");

balloon.innerHTML=["🎈","🎈","🎉","🎊"][Math.floor(Math.random()*4)];

balloon.style.position="fixed";

balloon.style.left=Math.random()*100+"vw";

balloon.style.bottom="-100px";

balloon.style.fontSize=(35+Math.random()*25)+"px";

balloon.style.transition="12s linear";

balloon.style.pointerEvents="none";

balloon.style.zIndex="999999";

document.body.appendChild(balloon);

requestAnimationFrame(()=>{

balloon.style.transform="translateY(-140vh)";

});

setTimeout(()=>{

balloon.remove();

},12000);

},i*180);

}

}

/* ---------- FIREWORK LOOP ---------- */

function megaFireworks(){

for(let i=0;i<12;i++){

setTimeout(()=>{

explode(

Math
