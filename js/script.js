
/*=========scroll Y =======*/

function scrollHeader(){
    const menu = document.getElementById('header');
    let header_2 = document.querySelector('.header-2');
    let header_1 = document.querySelector('.header_top');

    if(this.scrollY > 20){
        header_2.style.top = '0';
        header_1.style.display = 'none'
    } else {
        header_2.style.top = '58px';
         header_1.style.display = 'flex'
    }
}

window.addEventListener('scroll',scrollHeader);



/*=========show scroll=======*/

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');

  if(this.scrollY > 200){
    scrollTop.style.visibility = 'visible'
    scrollTop.style.bottom = '10%'
} else {
  scrollTop.style.visibility = 'hidden'
  scrollTop.style.bottom = '0rem'
}
}

window.addEventListener('scroll',scrollTop)

/*=========menu bars=======*/

let menyu = document.querySelector('.menu');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    menyu.classList.toggle('active');
}

const card = document.querySelector('.img_all')
const cardItem = document.querySelector('.all');
const halfHeight = cardItem.offsetHeight/2;

card.addEventListener('mousemove',startRotate);
card.addEventListener('mouseout',stopRotate);

function startRotate(e) {
    cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight)/20 + 'deg) rotateY(' + (e.offsetX - halfHeight)/20 + 'deg)';   
}

function stopRotate(e) {
    cardItem.style.transform = 'rotate(0)';
}
console.log("Salom")
/*=========scrollReveal=======*/

// const sr = ScrollReveal ({
//   origin: 'top',
//   distance: '30px',
//   duration: 2000,
//   reset:true
// })

// sr.reveal('.image-bloks img, .text h1',{
//   interval: 200
// })

/*=========register js=============*/
function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}


const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

registerPassword.addEventListener('input', function () {
	registerConfirmPassword.pattern = `${this.value}`;
})





