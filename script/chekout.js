import { ticketToBuy,tickets } from "../data/TicketType.js";
let total=0;
tickets.forEach((ticket) => {
  ticketToBuy.forEach((item)=>{
    if(ticket.type === item.type){
      document.querySelector('.ticket-number').innerHTML+=
      `<div class="amount summary">
         <h4>${item.quantity} ${ticket.type} </h4>
          <div>
           <img src="images/icons/nigeria-naira-currency-symbol.png" alt="">
           <span>${ticket.amount * item.quantity}</span>
          </div>
        </div>
      `
      total+=ticket.amount
      let servicefee=Number(document.querySelector('.js-service-fee').innerHTML)
      servicefee+= ticket.serviceFee
      total+=ticket.serviceFee
      document.querySelector('.js-service-fee').innerHTML=servicefee
      document.querySelector('.js-sub-total').innerHTML=total
      document.querySelector('.js-total').innerHTML=total
    }
  })
});
