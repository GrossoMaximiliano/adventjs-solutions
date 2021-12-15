export default function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  let reply = [0, 0, 0, 0, 0, 0], mChange = change;

  for(let i = coins.length; 0 <= i; i-- ) {
    let valor = coins[i], cDivisible = parseInt(mChange / valor);
    if ( cDivisible >= 0 ) {
      reply[i] = cDivisible;
      mChange -= cDivisible * valor;
    } 
  }
  return reply
}
