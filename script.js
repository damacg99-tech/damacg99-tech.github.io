
document.addEventListener('DOMContentLoaded',()=>{
 const slides=document.querySelectorAll('.slide');
 let cur=0;
 function show(i){slides.forEach(s=>s.classList.remove('active'));slides[i].classList.add('active');cur=i;}
 function next(){show((cur+1)%slides.length);}
 function prev(){show((cur-1+slides.length)%slides.length);}
 show(0);
 document.querySelector('.slider-edge-left').addEventListener('mouseenter',prev);
 document.querySelector('.slider-edge-right').addEventListener('mouseenter',next);
 setInterval(next,6000);
});
