import { factorBig, divisoresBig, gcdBig, mismosPrimos } from "./factorizacion.mjs";
import { modPow } from "bigint-mod-arith";

// Calcula el número de unidades del anillo Z_m, o |U_m|
const calcularOrden = (modulo) => {
    const factorizacion =  [...factorBig( BigInt(modulo) )];
    let valor = 1n;
    while( factorizacion.length != 0) {
        const [base, exp] = factorizacion.shift();
        valor = valor * ( base - 1n ) * ( base ** (BigInt(exp) - 1n) )
    }
    return valor
}

const mcd = (a, b) => gcdBig(BigInt(a), BigInt(b));
const esUnidad = (clase, modulo) => mcd(clase, modulo) === 1n

// En un anillo Z_m se cumple que para todo elemento a != 0 de él
// existen naturales n < m tales que a^n = a^m;
// La funcion recoge los minimos n, m
const calcularPotencia = (clase, m) => {
    m = BigInt(m);
    clase = BigInt(clase);
    if(clase % m === 0n) return 0n;
    //console.log(divisores)
    if( mismosPrimos(m, clase) ) {
        let cont = 2;
        let clasePow = modPow(clase, cont, m);
        while(clasePow !== 0n) {
            cont++;
            clasePow = modPow(clase, cont, m);
        }
        return cont;
    }

    if( esUnidad(clase, m) ) {
        // Obtenemos los divisores del orden del grupo U_m
        const divisores = divisoresBig( calcularOrden(m) );
        // Lo que hace es revisar todos los posibles divisores del orden del
        // grupo U_m, ya que en algunos de siempre un elemento de él se
        // pondra en 1
        for(let i = 0; i < divisores.length; i++) {
            if( modPow(clase, divisores[i], m) === 1n) return divisores[i]
        }

    }else {
        let contador = 0n;
        let m_ = m;
        // La idea es que de una ecuacion a^x = a^y modulo m, con a != 0, x < y.
        // podamos pasar a'^x*d_0^(x - 1) = a'^y*d_0^(y-1) modulo m_1.
        // Donde mcd(a, m) = d_0, m_1 = m/d_0.
        // Para luego si d_1 = mcd(d_0, m1) = 1, resolver por teoria de grupos.
        // O sino seguir reduciendo a un m más chico (Este proceso es finito).
        // Al encontrar el m_k-1 > m_k = m_k+1, tal que (d_k-1, m_k) = 1, se resuelve:
        // a^n = 1 modulo m_k, y tenemos que a^(n+k) = a^k modulo m.
        // La funcion recoge n + k, donde k < m.
        // m se reducira a 1 syss comparte con a todos sus primos.
        let d = mcd( clase, m_ );
        m_ = m_ / d
        contador++;
        while( mcd( d, m_ ) !== 1n ) {
            d = mcd( d, m_ )
            m_ = m_ / d;
            contador++;
        }
        //console.log("m_:", m_, "clase: ", clase)
        //console.log("orden de clase:", calcularPotencia(clase, m_),"contador", contador)
        //console.log("\n")
        return contador + calcularPotencia(clase, m_);
    }
}

// Funcion prestada de la IA, para no tener que poner 4 bucles anidados
function generateCombinations(arrays, callback) {
    function recurse(index, currentCombination) {
        if (index === arrays.length) {
            // Caso base: hemos completado una combinación
            callback(currentCombination);
            return;
        }

        const currentArray = arrays[index];
        for (let i = 0; i < currentArray.length; i++) {
            // Llamada recursiva para el siguiente array
            recurse(index + 1, currentCombination.concat(currentArray[i]));
        }
    }

    recurse(0, []);
}

/* Uso:
generateCombinations(arrays, (combination) => {
    // console.log(combination); // combination es un array como [0, 0, 0, 0]
});
*/

//console.log( divisoresBig(3) )
//console.log( mcd(900n, 452n) );
//console.log( esUnidad(900, 11) )
//console.log( esPotenciaExacta(27))
//console.log( calcularOrden(900))
//console.log( calcularPotencia(88, 880) )
//console.log(divisoresBig(calcularOrden(88)))

export { calcularPotencia, generateCombinations }