const btnBack = document.querySelector('.interesting__btn--back')
const btnForward = document.querySelector('.interesting__btn--forward')
const pags = []
pags.push(document.getElementById('slidePg1'))
pags.push(document.getElementById('slidePg2'))
pags.push(document.getElementById('slidePg3'))
pags.push(document.getElementById('slidePg4'))
pags.push(document.getElementById('slidePg5'))

const posts = []
posts.push(document.getElementById('interesting1'))
posts.push(document.getElementById('interesting2'))
posts.push(document.getElementById('interesting3'))
posts.push(document.getElementById('interesting4'))
posts.push(document.getElementById('interesting5'))

btnBack.addEventListener('click', (e) => {
    e.preventDefault()
    const activeEl = posts.find(post => post.classList.contains('active'))
    if (activeEl.dataset.name == '1') {
        activeEl.classList.remove('active')
        posts[posts.length - 1].classList.add('active')
        pags[0].classList.remove('interesting__item-pagination--active')
        pags[pags.length - 1].classList.add('interesting__item-pagination--active')
    } else {
        const pagN = activeEl.dataset.name
        const activePag = pags.find(pag => pag.dataset.name == pagN)
        activePag.classList.remove('interesting__item-pagination--active')
        activeEl.classList.remove('active')
        const data = activeEl.dataset.name - 1
        const newEl = posts.find(post => post.dataset.name == data)
        newEl.classList.add('active')
        pags.find(pag => pag.dataset.name == data).classList.add('interesting__item-pagination--active')

    }
})

btnForward.addEventListener('click', (e) => {
    e.preventDefault()
    const activeEl = posts.find(post => post.classList.contains('active'))
    if (activeEl.dataset.name == '5') {
        activeEl.classList.remove('active')
        posts[0].classList.add('active')
        pags[pags.length - 1].classList.remove('interesting__item-pagination--active')
        pags[0].classList.add('interesting__item-pagination--active')
    } else {
        const pagN = activeEl.dataset.name
        const activePag = pags.find(pag => pag.dataset.name == pagN)
        activePag.classList.remove('interesting__item-pagination--active')
        activeEl.classList.remove('active')
        const data = activeEl.dataset.name - 0 + 1
        const newEl = posts.find(post => post.dataset.name == data)
        newEl.classList.add('active')
        pags.find(pag => pag.dataset.name == data).classList.add('interesting__item-pagination--active')
    }
})

pags.forEach(pag => {
    pag.addEventListener('click', e => {
        e.preventDefault()
        if (e.target.classList.contains('interesting__list-pagination')) {
            console.log('.')
        } else {
            const data = e.target.dataset.name
            const activePag = pags.find(pag => pag.classList.contains('interesting__item-pagination--active'))
            const activePost = posts.find(post => post.classList.contains('active'))
            activePag.classList.remove('interesting__item-pagination--active')
            activePost.classList.remove('active')
            const newEl = posts.find(post => post.dataset.name == data)
            newEl.classList.add('active')
            pags.find(pag => pag.dataset.name == data).classList.add('interesting__item-pagination--active')
        }
    })
});

$(document).ready(function () {
    $('.partners__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.partners__btn--back'),
        nextArrow: $('.partners__btn--forward'),
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
})


$(document).ready(function () {
    $('.news__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true,
        mobileFirst: true,
        prevArrow: $('.news__btn--back'),
        nextArrow: $('.news__btn--forward'),
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 1440,
                settings: "unslick"
            }
        ]
    });
})

$(document).ready(function () {
    $('.contests__list').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.contests__btn--back'),
        nextArrow: $('.contests__btn--forward'),
        autoplay: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    arrow: false,
                }
            },
            {
                breakpoint: 1440,
                settings: "unslick"
            }
        ]
    });
})

function dropMenu() {
    const btn = document.querySelector('.header__btn')
    const menu = document.querySelector('.header__nav')

    btn.addEventListener('click', e => {
        if (menu.classList.contains('visually-hidden')) {
            menu.classList.remove('visually-hidden')
            btn.classList.add('header__open')
        } else {
            menu.classList.add('visually-hidden')
            btn.classList.remove('header__open')
        }
    })
}

function searchBtn(classIt, inputClass) {
    const btn = document.querySelector(classIt)
    const input = document.querySelector(inputClass)
    let open = false

    btn.addEventListener('click', e => {
        if (!open) {
            input.style.display = 'block'
            open = true
        } else {
            input.style.display = 'none'
            open = false
        }
    })
}

searchBtn('.header__btn--search', '.header__input')
searchBtn('.header__search-btn--tab', '.header__input-desk')

dropMenu()