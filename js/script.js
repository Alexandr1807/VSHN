let swiperNews = new Swiper('.swiper-container.swiper-container--news', {
    navigation: {
        nextEl: '.news__button-next',
        prevEl: '.news__button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 40,

    breakpoints: {
        // when window width is >= 480px
        415: {
            slidesPerView: 1,
            spaceBetween: 30,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        1329.98: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

let swiperWorker = new Swiper('.swiper-container.swiper-container--worker', {
    navigation: {
        nextEl: '.worker__button-next',
    },
    resistance: true,
    pagination: {
        el: '.swiper-pagination.worker__pagination',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
});

let nav = document.querySelector('#nav');
let sol = document.querySelector('#solutions');
let prd = document.querySelector('#products');
let blog = document.querySelector('#blog');

let solutionsInner = document.querySelector('#solutionsInner');
let productsInner = document.querySelector('#productsInner');
let blogInner = document.querySelector('#blogInner');

let hidedSolutionsInner = document.getElementById('hidedSolutionsInner');
let hidedProductsInner = document.getElementById('hidedProductsInner');
let hidedBlogInner = document.getElementById('hidedBlogInner');

nav.onmouseover = function (event) {
    let target = event.target;
    if (target == sol) {
        closeMenu();
        solutionsInner.style.visibility = 'visible';
        solutionsInner.style.opacity = '1';
    } else if (target == prd) {
        closeMenu();
        productsInner.style.visibility = 'visible';
        productsInner.style.opacity = '1';
    } else if (target == blog) {
        closeMenu();
        blogInner.style.visibility = 'visible';
        blogInner.style.opacity = '1';
    } else if (target != prd && target != sol && target != nav) {
        closeMenu();
    }
};

hidedSolutionsInner.addEventListener('mouseleave', () => {
    closeMenu();
});

hidedProductsInner.addEventListener('mouseleave', () => {
    closeMenu();
});

hidedBlogInner.addEventListener('mouseleave', () => {
    closeMenu();
});

let closeMenu = () => {
    solutionsInner.style.visibility = 'hidden';
    solutionsInner.style.opacity = '0';
    productsInner.style.visibility = 'hidden';
    productsInner.style.opacity = '0';
    blogInner.style.visibility = 'hidden';
    blogInner.style.opacity = '0';
};

///////////////////////////////////////////////////////////////////

// Sidebar 

const burger = document.querySelector('.header__burger'),
    sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active')
    burger.classList.toggle('header__burger-active')
})
