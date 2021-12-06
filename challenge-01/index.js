export default function contarOvejas(ovejas) {
  ovejas = ovejas.filter( el => {
      let name = el.name.toLowerCase(), 
      isValidName = name.includes("a") && name.includes("n");
      if ( isValidName && el.color === "rojo" ) return el;
  } )
  return ovejas
}
