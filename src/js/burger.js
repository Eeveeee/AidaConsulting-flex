const burgerBtn = document.querySelector('.button-burger')
const burgerMenu = document.querySelector('.header-nav')
const navigation = document.querySelectorAll('.nav-selector')
let currentWidth = document.documentElement.clientWidth

navigation.forEach((selector) => {
  selector.addEventListener('click', (e) => {
    e.preventDefault()
    let equal = document.querySelector(`.${selector.getAttribute('href')}`)
    equal.scrollIntoView({ block: 'center', behavior: 'smooth' })
    if (burgerMenu.classList.contains('active')) {
      burgerBtn.classList.toggle('active')
      burgerMenu.classList.toggle('active')
      document.body.classList.toggle('locked')
    }
  })
})

burgerBtn.addEventListener('click', (e) => {
  e.preventDefault()
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  document.body.classList.toggle('locked')
})
