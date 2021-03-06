// In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation f(n) = f(n-1) + f(n-2)
// with seed values f(1) = 1 and f(2) = 1
// #Your task : You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.

//FUNDAMENTALS | RECURSION | ALGORITHMS | COMPUTABILITY THEORY | THEORETICAL COMPUTER SCIENCE | MATHEMATICS | NUMBERS

const fibonacci = n => {
  return (n <= 2) ? 1 : fibonacci(n-1) + fibonacci(n-2)
};
