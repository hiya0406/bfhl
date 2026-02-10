const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
export function lcm(arr) {
  return arr.reduce((x, y) => (x * y) / gcd(x, y));
}
