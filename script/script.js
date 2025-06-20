const increaseBtn=document.querySelectorAll('.increase-btn')
const dereaseBtn=document.querySelectorAll('.decrease-btn')
const dropdownBtn=document.querySelectorAll('.dropdown-btn')

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