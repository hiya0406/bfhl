const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
export function hcf(arr) {
  return arr.reduce((x, y) => gcd(x, y));
}
