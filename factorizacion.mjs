/*
La función de factorización está basada en una implementación 
open-source del algoritmo Pollard Rho + Miller-Rabin publicada en 
ProgrammerSought por el usuario ‘程序猿成长之路’. Utilizada como referencia 
porque es una implementación estable y verificada para BigInt
*/

// ---------- Utilidades para BigInt ----------
function absBig(x) { return x < 0n ? -x : x; }

function gcdBig(a, b) {
  a = absBig(a);
  b = absBig(b);
  while (b !== 0n) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function modBig(a, m) {
  const r = a % m;
  return r >= 0n ? r : r + m;
}

function modPowBig(base, exp, mod) {
  let result = 1n;
  base = modBig(base, mod);
  while (exp > 0n) {
    if (exp & 1n) result = modBig(result * base, mod);
    base = modBig(base * base, mod);
    exp >>= 1n;
  }
  return result;
}

// ---------- Miller-Rabin primalidad ----------
function isPrimeBig(n) {
  if (n < 2n) return false;
  const smallPrimes = [2n, 3n, 5n, 7n, 11n, 13n, 17n];
  for (const p of smallPrimes) {
    if (n === p) return true;
    if (n % p === 0n) return false;
  }
  let d = n - 1n;
  let s = 0n;
  while ((d & 1n) === 0n) {
    d >>= 1n;
    s++;
  }
  const bases = [2n, 325n, 9375n, 28178n, 450775n, 9780504n, 1795265022n];
  for (const a of bases) {
    if (a % n === 0n) continue;
    let x = modPowBig(a, d, n);
    if (x === 1n || x === n - 1n) continue;
    let next = false;
    for (let r = 1n; r < s; r++) {
      x = modBig(x * x, n);
      if (x === n - 1n) {
        next = true;
        break;
      }
    }
    if (next) continue;
    return false;
  }
  return true;
}

// ---------- Pollard-Rho estable para BigInt ----------
function pollardRhoBig(n) {
  if (n % 2n === 0n) return 2n;
  // función polinómica
  const f = (x, c) => modBig(x * x + c, n);

  while (true) {
    let x = 2n;
    let y = 2n;
    const c = 1n + BigInt(Math.floor(Math.random() * Number(n - 1n)));
    let d = 1n;
    while (d === 1n) {
      x = f(x, c);
      y = f(f(y, c), c);
      d = gcdBig(absBig(x - y), n);
    }
    if (d > 1n && d < n) return d;
    // si d == n, reiniciar con otro c
  }
}

// ---------- Factorización con Pollard-Rho ----------
function factorBig(n) {
  n = BigInt(n);
  const fac = new Map();
  const stack = [n];
  while (stack.length) {
    const m = stack.pop();
    if (m === 1n) continue;
    if (isPrimeBig(m)) {
      fac.set(m, (fac.get(m) || 0) + 1);
    } else {
      const d = pollardRhoBig(m);
      stack.push(d);
      stack.push(m / d);
    }
  }
  return fac;
}

// ---------- Obtener divisores desde la factorización ----------
function divisoresBig(n) {
  const f = factorBig(n);
  const primes = Array.from(f.keys());
  let divisores = [1n];

  for (const p of primes) {
    const exp = f.get(p);
    const nuevos = [];
    for (let d of divisores) {
      let pp = 1n;
      for (let i = 0; i < exp; i++) {
        pp *= p;
        nuevos.push(d * pp);
      }
    }
    divisores = divisores.concat(nuevos);
  }

  divisores.sort((a, b) => (a < b ? -1 : 1));
  return divisores;
}

// ---------- Verificar si n y m tienen exactamente los mismos primos ----------

function mismosPrimos(n, m) {
  n = BigInt(n);
  m = BigInt(m);

  // Factorizamos ambos
  const fn = factorBig(n);   // Map(primo → exponente)
  const fm = factorBig(m);

  // Obtenemos los conjuntos de primos
  const primesN = new Set(fn.keys());
  const primesM = new Set(fm.keys());

  // Si no tienen el mismo tamaño, ya falló
  if (primesN.size !== primesM.size) return false;

  // Comparamos cada primo
  for (const p of primesN) {
    if (!primesM.has(p)) return false;
  }

  return true;
}

export { factorBig, divisoresBig, isPrimeBig, gcdBig, mismosPrimos };
