export default function isValid(letter) {

  let resultado = letter.split(" ").filter( el => el.split("(").length != el.split(")").length || el.replace(/[(){}]/g, '') == "")

  return ( resultado.length ? false : true) 
}
