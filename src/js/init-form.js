const modal = document.querySelector('.modal')
const modalButton = modal.querySelector('.modal__button')
const modalMessage = modal.querySelector('.modal__message')
const select = document.querySelector('.select')
const form = document.querySelector('form')
const message = document.querySelector('.invalid-message')

const modalButtonClickHandler = () => {
  modal.classList.remove('modal--active')
  modalButton.removeEventListener('click', modalButtonClickHandler)
}

const openModal = (title) => {
  modal.classList.add('modal--active')
  modalMessage.textContent = `Ваша заявка "${title}" успешно принята!`
  modalButton.addEventListener('click', modalButtonClickHandler)
}

const initForm = () => {
  select.addEventListener('change', () => {
    if(select.value) {
      message.style.color = 'transparent'
    }
  })
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if(!select.value) {
      message.style.color = 'red'
      return
    }
    const title = new FormData(event.target).get('title')
    openModal(title)
  })
}

export {initForm}