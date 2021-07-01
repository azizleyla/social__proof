function sumOfTwoNumbers(a,b){
  const sum =  a + b;
  return function(c){
    return sum + c;
  }
}
console.dir(sumOfTwoNumbers(4,5)(10));