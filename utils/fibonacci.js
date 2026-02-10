export function fibonacci(n) {
    if (!Number.isInteger(n) || n <= 0) return [];
    const res = [0, 1];
    for (let i = 2; i < n; i++) res.push(res[i - 1] + res[i - 2]);
    return res.slice(0, n);
  }
  