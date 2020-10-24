const burgerBtn = document.querySelector('.button-burger')
const burgerMenu = document.querySelector('.header-nav')
const navigation = document.querySelectorAll('.nav-selector')
let currentWidth = document.documentElement.clientWidth
console.log(navigation)

function widthCheck(currentWidth) {
  if (currentWidth <= 1000) {
    return true
  } else return false
}

navigation.forEach((selector) => {
  selector.addEventListener('click', (e) => {
    e.preventDefault()
    let equal = document.querySelector(`.${selector.getAttribute('href')}`)
    equal.scrollIntoView({ behavior: 'smooth' })
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
