export default function createXmasTree(height) {
  
  // ¡Y no olvides también poner los turrones!
  let arbol = "", 
  contador = 1, 
  base = "", 
  defaultBase = "", 
  asteriscos = "*"; 

  for(let i = 0; i < (height-1); i++)
  { 
    base += "_"; 
    defaultBase += "_";
  }
  
  for( let i = 0; i < height; i++ )
  { 
    let lado = base.slice((contador-1));
    contador += 2;
    arbol += base + asteriscos + base + "\n";
    asteriscos += "**";
    base = base.slice(1);
  } 
  arbol += defaultBase + "#" + defaultBase + "\n";
  arbol += defaultBase + "#" + defaultBase;

  return arbol
}
