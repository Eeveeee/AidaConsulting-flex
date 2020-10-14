const burgerBtn = document.querySelector('.button-burger')
const burgerMenu = document.querySelector('.header-nav')

burgerBtn.addEventListener('click', (e) => {
  e.preventDefault()
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  document.body.classList.toggle('locked')
})
