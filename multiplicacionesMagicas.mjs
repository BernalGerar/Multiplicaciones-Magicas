import { calcularPotencia, generateCombinations } from "./utils.mjs";

const digitos = [
    [1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n],
    [0n, 1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n],
    [1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n],
    [0n, 1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n]
]

const resultados = [];
generateCombinations(digitos, (combinacion) => {
    const [dig_a, dig_b, dig_c, dig_d] = combinacion;
    const divisor = 10n*(dig_a - 1n) + dig_b
    let pot;
    
    if(divisor !== 0n) {
        pot = calcularPotencia(10n, divisor);
    }else pot = 0n;
    for(let i = 2n; i < pot; i++) {
        const dividendo = 9n*dig_c*( 10n ** i ) + dig_b*(10n ** i) + 10n*dig_a - 9n*dig_d;
        const N = (dividendo / divisor)
        const N_str = (N).toString();
        if( (dividendo % divisor === 0n) &&
            (N_str[0] == dig_c) &&
            (N_str[N_str.length - 1] == dig_d) &&
            (N < 10n ** i)
          ) {
            const n = 10n*dig_a + dig_b
            resultados.push({N: N, n: n, m: divisor, exponente: i})
          }
    }
})

console.log(resultados, resultados.length)