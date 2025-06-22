import { ticketToBuy } from "../data/TicketType.js"

const increaseBtn=document.querySelectorAll('.increase-btn')
const dereaseBtn=document.querySelectorAll('.decrease-btn')
const dropdownBtn=document.querySelectorAll('.dropdown-btn')

window.addEventListener('DOMContentLoaded',()=>{
  localStorage.removeItem('ticket')
})

document.querySelector('.pay-btn').addEventListener('click',()=>{
  document.querySelectorAll('.quantity').forEach((quantity)=>{
    const quantityNumber=Number(quantity.innerHTML)
    const type=quantity.dataset.type
    if(quantityNumber > 0){
      ticketToBuy.push({
        quantity:quantityNumber,
        type:type
      })
    }
  })
  if(ticketToBuy.length>0){
    localStorage.setItem('ticket',JSON.stringify(ticketToBuy))
    window.location='checkout.html'
  }else{
    alert('Please select a ticket');  
    return
  }

})

increaseBtn.forEach((btn)=>{
  const ticketType=btn.dataset.type
  btn.addEventListener('click',()=>{
    document.querySelector(`.ticket-quantity-${ticketType}`).innerHTML++
  })
})

dereaseBtn.forEach((btn)=>{
  const ticketType=btn.dataset.type
  btn.addEventListener('click',()=>{
    if(document.querySelector(`.ticket-quantity-${ticketType}`).innerHTML > 0){
      document.querySelector(`.ticket-quantity-${ticketType}`).innerHTML--
    }  
  })
})

dropdownBtn.forEach((btn)=>{
  const questionNumber=btn.dataset.number
  btn.addEventListener('click',()=>{
    document.querySelector(`.${questionNumber}-q`).classList.toggle('show')
  })
})
document.querySelectorAll('.link-btn').forEach((btn)=>{
 btn.addEventListener('click',()=>{
  document.querySelector('.nav').classList.remove('show-ul')
 })
})
document.querySelector('.menu-bar').addEventListener('click',()=>{
    document.querySelector('.nav').classList.toggle('show-ul');
    document.querySelectorAll('.toggle-btn').forEach((btn)=>{
      btn.classList.toggle('visible')
    })
})

// window.addEventListener('pageshow',(event)=>{
//   if(event.persisted||performance.getEntriesByType('navigation')[0].type === 'back_forward'){
//     console.log('back')
//     localStorage.removeItem('ticket')
//   }
// })