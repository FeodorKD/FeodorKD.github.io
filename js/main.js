const linksBlock = document.getElementById('link_block')
const burgerButton = document.getElementById('burger_button')
const linkList = linksBlock.childNodes


const clcikHandler = () => {
    if(burgerButton.classList.contains('open')){
        linksBlock.classList.remove('links_open')
        burgerButton.classList.remove('open')
    } else {
        linksBlock.classList.add('links_open')
        burgerButton.classList.add('open')
    }
}
burgerButton.addEventListener('click', clcikHandler)

linkList.forEach((item) => {
    if(item.classList){
        item.addEventListener('click', clcikHandler)
    }
})

