// // Example 1
// function multiplyby(num){
//   return function(x)  {
//     return x*num;
//   }
// }
// const triple=multiplyby(3);
// const double =multiplyby(2);
// const half= multiplyby(0.5);

// console.log(triple(5),double(2),half(5));

// // example 2
// function makebtwfunc(x,y){
//     return function(num){
//         if(num >=x && num<= y){
//             return true;
//         }
//         else {return false};
//     }
// }
// const ischild =makebtwfunc(0,18);
// const adult =makebtwfunc(19,100)
// console.log(ischild(2),adult(56));

// // Example 3
//  function lessthan(x){
//     return function(n){
//         if(n<x){
//             return 'allright'}
//             else {
//                 return 'too much';
//             }    
        
//     }
//  }
//  const less= lessthan(80);
//  console.log(less(89));

// Example 4
 function notequalto(n,b){
    let total=n+b;
    return function(a){
        if(total===a){
            return 'equal';
        }
        else {
            return 'not equal'
        }
    }
}
const sumtwelve = notequalto(12);
const sumsix = notequalto(6)
console.log(sumtwelve(3,4),sumsix(3,3));

    



