import { searchOks } from "./api.js"

const searchButton = document.querySelector('.search')
const regEx = /ГОСТ\s[0-9]{3,5}\-[0-9]{2,4}|ГОСТ\s[0-9]{3,5}/g
let checkedOptions = []
let totalPrice = 0
const itemTemplate = document.querySelector('#list__item').content.querySelector('.list__item')
const price = document.querySelector('.total-price')
const list = document.querySelector('.list')
const select = document.querySelector('.select')

const setPriceState = () => {
  if (totalPrice === 0) {
    price.textContent = ''
    return
  }
  price.textContent = `Итоговая сумма равна: ${totalPrice}`
}

const setSelectOptionsState = (code, state) => {
  const option = select.querySelector(`option[code='${code}']`)
  option.selected = state
}

const createListItem = ({name, code, price}, index) => {
  totalPrice = totalPrice + parseInt(price, 10)
  const newItem = itemTemplate.cloneNode(true)
  newItem.querySelector('.item__name').textContent = name
  newItem.querySelector('.item__code').textContent = code
  newItem.querySelector('.item__price').textContent = price
  newItem.querySelector('.item__button').addEventListener('click', () => {
    list.removeChild(newItem)
    checkedOptions.splice(index, 1)
    setSelectOptionsState(code, false)
    createOptions()
    setPriceState()
  })
  list.append(newItem)
  setPriceState()
}

const createOptions = () => {
  totalPrice = 0
  document.querySelector('.list').replaceChildren()
  checkedOptions.forEach((option, index) => {
    createListItem(option, index)
    setSelectOptionsState(option.code, true)
  })
}
 
const checkOptions = (results) => {
  const newOptions = []
  results.forEach(result => {
    const option = document.querySelector(`option[code='${result}']`)
    const optionObject = {
      code: option.attributes.code.value,
      name: option.textContent,
      price: option.attributes.price.value
    }
    newOptions.push(optionObject)
  })
  checkedOptions = newOptions
  createOptions()
}

const findResults = (response) => {
  const results = []
   response.forEach(element => {
    element.results.forEach(result => {
      results.push(result)
    })
   })
  checkOptions(new Set(results))
}

const searchButtonClickHandler = () => {
  const description = document.querySelector('.description').value
  const request = {query : description.match(regEx)} 
  searchOks(request, findResults)
}

const initSearch = () => {
  searchButton.addEventListener('click', searchButtonClickHandler)
}

export {initSearch}