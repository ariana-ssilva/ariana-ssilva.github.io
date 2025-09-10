
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

const menu = document.querySelector('nav .container ul');

// show menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

// hide menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})



// skills show-hide
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');

    })
})

// swiper js (testimonial section)
const swiper = new Swiper('.swiper', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});


// menu sidebar

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

// add active class to clicked nav item
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})

// read more about link
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');

    if (readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = 'Show Less';
    } else {
        readMoreBtn.textContent = 'Show More';

    }
})

// add box shadow on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 100)
});