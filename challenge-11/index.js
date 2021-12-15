export default function shouldBuyFidelity(times) {
  let entradaNormal = 12 * times,  tarjetaFidelidad  = 250;
  for(let i = 1; i <= times; i++){
    tarjetaFidelidad+= (12 * Math.pow(0.75, i));
  }
  return ( entradaNormal >= tarjetaFidelidad ) 
 
}
