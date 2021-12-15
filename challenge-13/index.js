export default function wrapGifts(gifts) {
  let envoltura = "*".repeat(gifts.length*2)
  let envolvidos = gifts.map( el => { 
    if ( el.length > gifts.length ) envoltura = "*".repeat(el.length+2);
    return `*${el}*`  
  });
  return [envoltura, ...envolvidos, envoltura]
}  
