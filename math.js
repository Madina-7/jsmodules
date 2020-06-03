 
 // Un module de Math 
 
 // Create a function that will sumup the values
 
 export function sum(array) {
  
    let total = 0;

    array.forEach(element => {
        total = total + element;
    });
    
    return total;
 };


// - isOdd(n) : true ou false si le nombre envoyé est impair

export function isOdd(n){

    if(n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};

// - sumOddNumbers([n, ...]) : somme des nombres impairs

// remove pair numbers from array 
function noOdds(values){
    return values.filter(function (num) {
      return num % 2 != 0;
    });
  }

export function sumOddNumbers(array) {
    
    array = noOdds(array);
    // just do sum 
    return array.reduce((acc,cv)=> acc + cv);

};

// - max([n, ...]) : renvoie le nombre le plus grand d'un tableau

export function max(array) {

    var max = array.reduce(function(a, b) {
        return Math.max(a, b);
    });
    return max;
};
