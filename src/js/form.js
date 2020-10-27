const phoneValid = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i
const mailValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
const name = document.querySelector('.f-name'),
  mail = document.querySelector('.f-mail'),
  phone = document.querySelector('.f-phone'),
  service = document.querySelector('.f-service'),
  question = document.querySelector('.f-question')

const submitBtn = document.querySelector('.button-submit')
const loading = document.querySelector('.loading')
const messageContainer = document.querySelector('.message')
const submitBtnTxt = document.querySelector('.button-submit-text')
const messages = {
  text: '',
  status: '',
}

function errors() {
  if (!name.value) {
    messages.text = 'Некорректное имя'
    messages.status = 'error'
    return false
  } else if (!mailValid.test(mail.value)) {
    messages.text = 'Некорректный e-mail'
    messages.status = 'error'
    return false
  } else if (
    !phoneValid.test(phone.value) ||
    phone.value.split('').length < 11
  ) {
    messages.text = 'Некорректный номер телефона'
    messages.status = 'error'
    return false
  } else if (!service.value) {
    messages.text = 'Некорректная услуга'
    messages.status = 'error'
    return false
  } else if (!question.value) {
    messages.text = 'Некорректный вопрос'
    messages.status = 'error'
    return false
  }
  messages.status === 'success'
  return true
}

async function request() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3')

    const object = await response.json()
    if (response.ok) {
      submitBtnTxt.style.display = 'flex'
      loading.style.display = 'none'
      messageContainer.textContent = 'Ваша заявка успешно отправлена'
    }
  } catch (error) {
    messageContainer.style.color = 'tomato'
    messageContainer.textContent = 'Произошла ошибка'
    throw new Error(error)
  }
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(e)
  if (errors()) {
    submitBtnTxt.style.display = 'none'
    loading.style.display = 'flex'
    messageContainer.style.color = 'green'
    request()
  } else {
    messageContainer.style.color = 'tomato'
    messageContainer.textContent = messages.text
  }
})
