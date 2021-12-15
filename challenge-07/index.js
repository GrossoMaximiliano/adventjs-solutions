export default function contains(store, product) {
  if ( JSON.stringify(store).includes(`"${product}"`) ) return true;
  return false 
}
