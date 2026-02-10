export function getPrimes(arr) {
    if (!Array.isArray(arr)) return [];
    const isPrime = (n) => {
      if (n < 2) return false;
      for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
      return true;
    };
    return arr.filter(isPrime);
  }
  