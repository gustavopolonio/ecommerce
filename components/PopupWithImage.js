construtor(popupSelector)

open({ link, title }) {
  super.open()
  image.src = link
  image.alt = title
  p.textContent = title
}