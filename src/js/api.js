const getURL = 'https://gostassistent.ru/api/oks'
const postURL = 'https://gostassistent.ru/api/query-oks'

const getOks = (successFn) => {
  fetch(getURL)
  .then(response => response.json())
  .then(json => successFn(json))
}

const searchOks = (body, successFn) => {
  fetch(postURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(json => successFn(json))
}

export {getOks, searchOks}