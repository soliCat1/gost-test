import { getOks } from "./api.js"

const optionTemplate = document.querySelector('#option').content.querySelector('.select__option')
const select = document.querySelector('.select')

const createOption = ({name, code, price}) => {
  const newOption = optionTemplate.cloneNode(true)
  newOption.setAttribute('code', code)
  newOption.setAttribute('price', price)
  newOption.textContent = name
  select.append(newOption)
}

const createOptions = (response) => {
  response.forEach(oks => {
    createOption(oks)
  })
}

const initOptions = () => {
  getOks(createOptions)
}

export {initOptions}
