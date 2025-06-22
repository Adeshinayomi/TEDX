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

document.querySelector('.back').addEventListener('click',()=>{
  localStorage.removeItem('ticket')
})

document.querySelector('.checkout-btn').addEventListener('click',()=>{
  const email=document.querySelector('.email').value
  const confirmEmail=document.querySelector('.confirm-email').value
  const firstName=document.querySelector('.first-name').value
  const lastName=document.querySelector('.last-name').value
  const phone=document.querySelector('.phone').value
  const name= firstName + " " + lastName

  if(email === ""|| firstName === "" || lastName === "" || phone === "" ){
    alert('fill out all the fields')
    return;
  }else if(email !== confirmEmail){
    alert("emails does not match")
  }else{
    let handler = PaystackPop.setup({
        key: 'pk_test_1651a6297488fa17657f72c6a3d0e8f2e3b273b5', // your public key
        email: email,
        amount:total*100,
        currency: "NGN",
        ref: "TICKET_" + Math.floor(Math.random() * 1000000000),
        metadata: {
          custom_fields: [
            {
              display_name: "Full Name",
              variable_name: "full_name",
              value: name
            },
            {
              display_name: "Phone Number",
              variable_name: "phone_number",
              value: phone
            }
          ]
        },
        callback: function(response) {
          alert("✅Payment Successful!");
        },
        onClose: function() {
          alert("❌ Payment window closed.");
        }
    });
      handler.openIframe()
    }
})

