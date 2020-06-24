const card = document.querySelectorAll('.receita')
const modal_overlay = document.querySelector('.modal-overlay')
const modal = modal_overlay.querySelector('.modal')
const close = modal.querySelector('.material-icons')





for (let comida of card) {
    comida.addEventListener('click', () => {
        modal_overlay.classList.add('active')
        modal.querySelector('img').setAttribute('src', comida.children[0].src)
        modal.querySelector('h1').innerText = comida.children[1].innerHTML
        modal.querySelector('p').innerText = comida.children[2].innerHTML


    })
}

close.addEventListener('click', () => {
    modal_overlay.classList.remove('active')
})