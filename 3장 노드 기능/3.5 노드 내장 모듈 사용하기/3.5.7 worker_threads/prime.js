// 소수의 개수를 구하는 작업을 워커 스레드를 통해 해보겠습니다.
// 소수를 찾는 작업은 연산이 많이 들어가는 대표적인 작업입니다.
// 먼저 워커 스레드를 사용하지 않는 예제입니다.
const min = 2;
const max = 10000000;
const primes = [];

function generatePrimes(start, range) {
  let isPrime = true;
  const end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

console.time("prime");
generatePrimes(min, max);
console.timeEnd("prime");
console.log(primes.length);

// console

// prime: 3.352s
// 664579
