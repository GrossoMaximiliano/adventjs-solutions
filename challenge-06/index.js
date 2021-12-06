export default function sumPairs(numbers, result) {
  for( let i = 0; i < numbers.length; i++ ) {
    let el = numbers[i], diferencia = result - el;
    if ( numbers.find( (nro, index) => nro === diferencia && index != i) ) {
      return [el, diferencia];
    }   
  } 
  return null 
}    
