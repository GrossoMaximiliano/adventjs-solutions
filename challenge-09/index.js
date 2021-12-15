export default function groupBy(collection, it) {
  let newCollection = {}, val = null;
  collection.forEach( el => { 
    switch( typeof el ) 
    {
      case 'number':
        val = it(el);
        if ( newCollection[val] ) newCollection[val].push(el);
        else newCollection = { ...newCollection, [val]: [ el ] }
      break;

      case 'string':
      case 'object':
        val = el[it];
        if ( newCollection[val] ) newCollection[val].push(el);
        else newCollection = { ...newCollection, [val]: [ el ] }
      break;
      
    }
  })
  
  return newCollection 
}
