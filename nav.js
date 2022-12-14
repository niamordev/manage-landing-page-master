let openNav = document.querySelector('.icon-hamburger')
let closeNav = document.querySelector('.icon-close')

let btnNavLinks = document.querySelector('.btn-nav-links')
let navLinks = document.querySelector('.nav-links-mobile')
let activeNavMobile = document.querySelector('.active-nav-mobile')


btnNavLinks.addEventListener('click', function(){
    navLinks.classList.toggle('hidden')
    openNav.classList.toggle('hidden')
    closeNav.classList.toggle('hidden')
    document.body.classList.toggle('fixed')
})
