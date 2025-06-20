export let tickets=[
  {
    type:'early',
    amount:7000,
    serviceFee:160
  },
  {
    type:'regular',
    amount:10000,
    serviceFee:200
  }
]
export let ticketToBuy=JSON.parse(localStorage.getItem('ticket')) || []