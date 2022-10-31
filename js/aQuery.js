export function $(element) {
  return document.querySelector(element)
}

export function $all(elements) {
  return document.querySelectorAll(elements)
}

export function $log(message) {
  console.log(message)
}

export function $hide(element) {
  element.classList.remove('active')
}

export function $show(element) {
  element.classList.add('active')
}