function getElementOfArrayProperty(obj, key, index) {
    if (typeof obj[key] !== 'object' || obj === {}) { //se indica que, si obj es distinto de un object devuelva undefined
        return undefined;
      } else if (index > obj[key].length || obj[key].length <= 0) { //se indica que, si el object es menor a 0 o menor al largo del key, devuelva undefined
        return undefined;
      } else {
      return obj[key][index]; //se indica que devuelva el valor del index especificado
      }
}

//ejemplo
let objeto = {
    key: ['Steven Wilson', 'Neil Tyson']
   };

let result = getElementOfArrayProperty(objeto,'key',0);
console.log(result);   