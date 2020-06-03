
// Un module pour le DOM
// getPosition(element) : renvoie un tableau avec la position x,y
// moveTo(element, [x, y]) : déplace l'élément de x et de y 

// un module pour afficher les résultats
// display(aFunction, aFunction(n)) : 'aFunction => result'

 
//display(sum, sum([2,3,4])) // sum => 9
//display(sumOddNumbers, sumOddNumbers([2,3,4,5])) // sumOddNumbers => 8
//display(getPosition, getPosition(document.querySelector('#ball'))) // getPosition => [12, 100]



import {sum, isOdd,sumOddNumbers, max} from "./math.js"
console.log(sum([1,1,1]));

console.log(isOdd(4));

console.log(sumOddNumbers([1,1,2,2]))

console.log(max([1,2,9,5]));





