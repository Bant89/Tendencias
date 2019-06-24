const funcion = {
  rangeContains: (rangoInicial, rangoFinal) => {
    let rangoPrincipal = Array.from(
      rangoInicial.substring(1, rangoInicial.length - 1).split(",")
    ).map(e => parseInt(e));
    let rangoAComparar = Array.from(
      rangoFinal.substring(1, rangoFinal.length - 1).split(",")
    ).map(elemento => parseInt(elemento));
    let extremoIzquierdo, extremoDerecho;

    if (rangoInicial[0] == "[") {
      extremoIzquierdo = rangoPrincipal[0];
    } else {
      extremoIzquierdo = rangoPrincipal[0] + 1;
    }

    if (rangoInicial[rangoInicial.length - 1] == "]") {
      extremoDerecho = rangoPrincipal[1];
    } else {
      extremoDerecho = rangoPrincipal[1] - 1;
    }

    let ans = true;
    rangoAComparar.forEach(elemento => {
      if (elemento < extremoIzquierdo || elemento > extremoDerecho) ans = false;
    });

    return ans;
  }
};

funcion.rangeContains("[2,6)", "{-1,1,6,10}");

module.exports = funcion;

// [2,6) contains {2,4}
