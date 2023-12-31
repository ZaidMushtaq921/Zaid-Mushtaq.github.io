// scroll sections

let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x')
navbar.classList.toggle('active');
})




let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let ofset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= ofset && top < height + ofset) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //animation for active section
            sec.classList.add('show-animate');
        }
        // else{
        //     sec.classList.remove('show-animate');
        // }
    });

    
// jub scroll hoga down ki taraf 100px toggle hoga sticky class aur sticky class ka CSS apply hoga
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

// remove toggle icon and navbar when click navbar linkds (scroll)

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
// animation for footer on scroll
let footer = document.querySelector('footer');
footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

