export default function getMinJump(obstacles) {
  let result = -1;
  for(let i = 1; i <= 10; i++) {
    if ( result == -1 ) {
      if ( obstacles.filter( el => el%i == 0 ).length == 0 ) result = i;
    }
  }
  return result
}
