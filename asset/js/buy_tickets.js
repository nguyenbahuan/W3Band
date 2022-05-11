const buyBtns = document.querySelectorAll(".js-buy-tickets") 
const modal = document.querySelector('.js-modal')
const buyBtnClose = document.querySelector('.js-close')
const modalContainer = document.querySelector('.js-modal-container')


function showBuyTickets() {
    modal.classList.add('open')
}
function HideBuytickets(){
    modal.classList.remove('open')
}
for (const buyBtn of buyBtns ) {
    buyBtn.addEventListener('click',showBuyTickets)
} 

buyBtnClose.addEventListener('click',HideBuytickets)

modal.addEventListener('click',HideBuytickets)

modalContainer.addEventListener('click',function(event){
    event.stopPropagation();
})