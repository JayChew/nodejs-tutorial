exports.add = function (a, b) { // function to add two numbers
  return a + b; // return the sum of a and b
}
exports.subtract = function (a, b) { // function to subtract two numbers
  return a - b; // return the difference of a and b
}
exports.multiply = function (a, b) { // function to multiply two numbers
  return a * b; // return the product of a and b
}
exports.divide = function (a, b) { // function to divide two numbers
  if (b === 0) { // check if b is zero
    throw new Error('Cannot divide by zero'); // throw an error if b is zero
  }
  return a / b; // return the quotient of a and b
}
exports.modulus = function (a, b) { // function to find modulus of two numbers
  return a % b; // return the remainder of a divided by b
}
exports.exponent = function (a, b) { // function to find exponent of a number
  return Math.pow(a, b); // return a raised to the power of b
}
exports.squareRoot = function (a) { // function to find square root of a number
  if (a < 0) { // check if a is negative
    throw new Error('Cannot take square root of a negative number'); // throw an error if a is negative
  }
  return Math.sqrt(a); // return the square root of a
}
exports.cubeRoot = function (a) { // function to find cube root of a number
  return Math.cbrt(a); // return the cube root of a
}
exports.factorial = function (n) { // function to find factorial of a number
  if (n < 0) { // check if n is negative
    throw new Error('Cannot calculate factorial of a negative number'); // throw an error if n is negative
  }
  if (n === 0 || n === 1) { // check if n is 0 or 1
    return 1; // return 1 if n is 0 or 1
  }
  let result = 1; // initialize result to 1
  for (let i = 2; i <= n; i++) { // loop from 2 to n
    result *= i; // multiply result by i
  }
  return result; // return the factorial of n
}
exports.permutation = function (n, r) { // function to find permutation of n and r
  if (n < 0 || r < 0 || n < r) { // check if n or r is negative or n is less than r
    throw new Error('Invalid input for permutation'); // throw an error if input is invalid
  }
  return exports.factorial(n) / exports.factorial(n - r); // return n!/(n-r)!
}
exports.combination = function (n, r) { // function to find combination of n and r
  if (n < 0 || r < 0 || n < r) { // check if n or r is negative or n is less than r
    throw new Error('Invalid input for combination'); // throw an error if input is invalid
  }
  return exports.permutation(n, r) / exports.factorial(r); // return n!/(r!(n-r)!)
}
exports.gcd = function (a, b) { // function to find gcd of two numbers
  if (b === 0) { // check if b is zero
    return a; // return a if b is zero
  }
  return exports.gcd(b, a % b); // return gcd of b and a mod bs
}
exports.lcm = function (a, b) { // function to find lcm of two numbers
  if (a === 0 || b === 0) { // check if a or b is zero
    return 0; //  return 0 if a or b is zero
  }
  return Math.abs(a * b) / exports.gcd(a, b); // return abs(a*b)/gcd(a,b)
}
exports.isPrime = function (n) { // function to check if a number is prime
  if (n <= 1) { // check if n is less than or equal to 1
    return false; // return false if n is less than or equal to 1
  }
  for (let i = 2; i <= Math.sqrt(n); i++) { // loop from 2 to sqrt(n)
    if (n % i === 0) { // check if n is divisible by i
      return false; // return false if n is divisible by i
    }
  }
  return true; // return true if n is prime
}
exports.primeFactors = function (n) { // function to find prime factors of a number
  if (n <= 1) { // check if n is less than or equal to 1
    return []; // return empty array if n is less than or equal to 1
  }
  const factors = []; // initialize factors to empty array
  for (let i = 2; i <= n; i++) { // loop from 2 to n
    while (n % i === 0) { // check if n is divisible by i
      factors.push(i); // push i to factors
      n /= i; // divide n by i
    }
  }
  return factors; // return factors
}
exports.fibonacci = function (n) { // function to find fibonacci sequence up to n
  if (n < 0) { // check if n is negative
    throw new Error('Invalid input for Fibonacci sequence');
  }
  const fib = [0, 1]; // initialize fib to [0, 1]
  for (let i = 2; i <= n; i++) { // loop from 2 to n
    fib[i] = fib[i - 1] + fib[i - 2]; // calculate fibonacci number
  }
  return fib.slice(0, n + 1); // return fibonacci sequence up to n
}
exports.isPerfectSquare = function (n) { // function to check if a number is a perfect square
  if (n < 0) { // check if n is negative
    return false; // return false if n is negative
  }
  const sqrt = Math.sqrt(n); // find square root of n
  return sqrt * sqrt === n; // return true if square root of n is an integer
}
exports.isArmstrongNumber = function (n) { // function to check if a number is an Armstrong number
  if (n < 0) { // check if n is negative
    return false; // return false if n is negative
  }
  const digits = n.toString().split('').map(Number); // convert n to string and split it into digits
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0); // calculate sum of digits raised to the power of number of digits
  return sum === n; // return true if sum is equal to n
}
exports.isPalindrome = function (str) { // function to check if a string is a palindrome
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // remove non-alphanumeric characters and convert to lowercase
  return cleanedStr === cleanedStr.split('').reverse().join(''); // return true if cleaned string is equal to its reverse
}
exports.isAnagram = function (str1, str2) { // function to check if two strings are anagrams
  const cleanedStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // remove non-alphanumeric characters and convert to lowercase
  const cleanedStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // remove non-alphanumeric characters and convert to lowercase
  const sortedStr1 = cleanedStr1.split('').sort().join(''); // sort the characters of cleaned string 1
  const sortedStr2 = cleanedStr2.split('').sort().join(''); // sort the characters of cleaned string 2
  return sortedStr1 === sortedStr2; // return true if sorted strings are equal
}
exports.isSubsequence = function (str1, str2) {// function to check if str1 is a subsequence of str2
  let i = 0; // initialize i to 0
  for (let j = 0; j < str2.length && i < str1.length; j++) { // loop through str2
    if (str1[i] === str2[j]) { // check if characters at i and j are equal
      i++; // increment i if characters are equal
    }
  }
  return i === str1.length; // return true if i is equal to length of str1
}
exports.isSubset = function (arr1, arr2) { // function to check if arr1 is a subset of arr2
  const set2 = new Set(arr2); // create a set from arr2
  return arr1.every(item => set2.has(item)); // return true if every item in arr1 is present in set2
}
exports.isSuperset = function (arr1, arr2) { // function to check if arr1 is a superset of arr2
  const set1 = new Set(arr1); // create a set from arr1
  return arr2.every(item => set1.has(item)); // return true if every item in arr2 is present in set1
}
exports.isDisjoint = function (arr1, arr2) { // function to check if arr1 and arr2 are disjoint sets
  const set1 = new Set(arr1); // create a set from arr1
  return arr2.every(item => !set1.has(item)); //  return true if no item in arr2 is present in set1
}
exports.isEqual = function (arr1, arr2) { // function to check if arr1 and arr2 are equal
  if (arr1.length !== arr2.length) { // check if lengths of arr1 and arr2 are equal
    return false; // return false if lengths are not equal
  }
  const sortedArr1 = arr1.slice().sort(); // create a sorted copy of arr1
  const sortedArr2 = arr2.slice().sort(); // create a sorted copy of arr2
  return sortedArr1.every((item, index) => item === sortedArr2[index]); // return true if every item in sortedArr1 is equal to corresponding item in sortedArr2
}
