// 3. Write a program that tells if a number is even or odd

let Num1 = "odd";
let Num2 = "even";
if (10%3 == 0){
    console.log(Num2);
}
else {
    console.log(Num1);
}

// 5. write a program that prints FIZZ if a number
//  is a multiple of 3, BUZZ if a number is a multiple of 5, 
// FIZZBUZZ if the number is a multiple of both 3 and 5 otherwise
//  print the number


 let FIZZ = 3
 let BUZZ = 5


 for (let i=0; i<=0; i++)
 {
    if ( i%3 === 0){
        console.log(FIZZ);
    }
    
    else if ( i%5 === 0 ){
        console.log( BUZZ);
    }
    
    else if ( i%3 === 0 && i%5 === 0 ){
        console.log(FIZZBUZZ)
    }
    
    else {
        console.log(i)
    }
 };


 