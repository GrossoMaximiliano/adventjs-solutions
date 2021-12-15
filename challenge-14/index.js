export default function missingReindeer(ids) {
  ids.sort( (n1,n2) => n1-n2 );
  for (let i = 0; i < ids.length; i++){
    if ( ids[i] != i ) return i;
  }
  return ids.length
}
