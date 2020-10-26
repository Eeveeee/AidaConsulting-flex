const burgerBtn = document.querySelector('.button-burger')
const burgerMenu = document.querySelector('.header-nav')
const navigation = document.querySelectorAll('.nav-selector')

document.body.style.overflowY = 'visible'

function scrollLock() {
  let currentState = document.body.style.overflowY
  currentState = currentState === 'visible' ? 'hidden' : 'visible'
  document.body.style.overflowY = currentState
}

navigation.forEach((selector) => {
  selector.addEventListener('click', (e) => {
    e.preventDefault()
    let equal = document.querySelector(`.${selector.getAttribute('href')}`)
    equal.scrollIntoView({ block: 'center', behavior: 'smooth' })
    if (burgerMenu.classList.contains('active')) {
      burgerBtn.classList.toggle('active')
      burgerMenu.classList.toggle('active')
      scrollLock()
    }
  })
})

burgerBtn.addEventListener('click', (e) => {
  e.preventDefault()
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  scrollLock()
})
