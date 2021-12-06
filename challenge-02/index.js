export default function listGifts(letter) {
  letter = letter.replace( RegExp("  ", 'g'), " ");
  let Regalos = {};
  let Pedidos = letter.split(" ").filter( el => el && !el.includes("_"));
  
  Pedidos.forEach(el => {
        if ( Regalos[el] ) Regalos[el]++;
        else Regalos = { ...Regalos, [el]: 1  } 
  })
 return Regalos
}
