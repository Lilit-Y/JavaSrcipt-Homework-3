// recursive SumFactorial

const recursiveSumFactorial=n => {
    if (n==1)
    return 1;
    return n+recursiveSumFactorial(n-1);
};
console.log(recursiveSumFactorial(7))


// RecursiveFibonacci

const RecursiveFibonacci=n =>{
    if(n==0)
    return 0;
     if(n==1)
      return 1;
      return RecursiveFibonacci(n-1)+RecursiveFibonacci(n-2);
};
console.log(RecursiveFibonacci(9))


// isPrime

const Number=n =>{
    if(typeof n=='string')
    return 'Error'; 
     if(n%2==0 || n%3==0 || n%5==0 || n%7==0)
     return 'False';
     return 'True';
};
console.log(Number(19))
