const about=document.querySelector('#nav-about');
const works=document.querySelector('#nav-works');
const classes=document.querySelector('#nav-classes');
const test=document.querySelector('#nav-test');
const contact=document.querySelector('#nav-contact');

const navs=document.querySelectorAll('.nav-link');
const container=document.querySelectorAll('.container');
document.getElementById("review1").addEventListener('click',()=>window.open("https://maps.app.goo.gl/mtcVjFptCXYZMYpv5","_blank"))
document.getElementById("review2").addEventListener('click',()=>window.open("https://maps.app.goo.gl/smNiQaagkwacqELQ9","_blank"))
document.getElementById("review3").addEventListener('click',()=>window.open("https://maps.app.goo.gl/pkvVEMvc3PoMyzD58","_blank"))
document.getElementById("review4").addEventListener('click',()=>window.open("https://maps.app.goo.gl/Sp2jZ5yRL78exQrZ7","_blank"))
document.getElementById("review5").addEventListener('click',()=>window.open("https://maps.app.goo.gl/GkWcsWqcKKzAEc8s7","_blank"))
const arr=['']

about.addEventListener('click',()=>{
   NavActivation(about);
   activate(0);
})
works.addEventListener('click',()=>{
   NavActivation(works);
   activate(1);
})
classes.addEventListener('click',()=>{
   NavActivation(classes);
   activate(2)
})
test.addEventListener('click',()=>{
   NavActivation(test);
   activate(3)
})
contact.addEventListener('click',()=>{
   NavActivation(contact);
   activate(4)
})



function NavActivation(el){
    navs.forEach(nav=>{
        if(nav.classList.contains('activated'));
        {
            nav.classList.remove('activated');
        }
    })
    el.classList.add('activated');
    console.log(el);
    
}
function activate(n){

    container.forEach(a=>{
        if(a.classList.contains('active')){
            a.classList.remove('active');
        }
    })
    container[n].classList.add('active');
}
function openWhatsApp() {
    const number = "918688888974"; // Replace with your number
    const message = "Hi, I want to enquire about the dance classes";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }
