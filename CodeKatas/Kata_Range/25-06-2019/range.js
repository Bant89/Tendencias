const funcion = {
  containsInteger: (rangoInicial, rangoFinal) => {
    let extremoIzquierdo, extremoDerecho;
    let primerRango = [
      ...rangoInicial.substring(1, rangoInicial.length - 1).split(",")
    ].map(elemento => parseInt(elemento));
    let segundoRango = [
      ...rangoFinal.substring(1, rangoFinal.length - 1).split(",")
    ].map(elemento => parseInt(elemento));

    if (rangoInicial[0] == "[") extremoIzquierdo = primerRango[0];
    else extremoIzquierdo = primerRango[0] + 1;

    if (rangoInicial[rangoInicial.length - 1] == "]")
      extremoDerecho = primerRango[1];
    else extremoDerecho = primerRango[1] - 1;

    let ans = true;
    segundoRango.forEach(elemento => {
      if (elemento < extremoIzquierdo || elemento > extremoDerecho) ans = false;
    });

    return ans;
  },
  allPoints: rangoInicial => {
    let extremoIzquierdo = parseInt(rangoInicial[1]),
      extremoDerecho = parseInt(
        rangoInicial.substring(
          rangoInicial.lastIndexOf(",") + 1,
          rangoInicial.length - 1
        )
      );

    if (rangoInicial[0] != "[") extremoIzquierdo++;

    if (rangoInicial[rangoInicial.length - 1] != "]") extremoDerecho--;
    let resultado = [];
    for (let i = extremoIzquierdo; i <= extremoDerecho; i++) {
      resultado.push(i);
    }
    return resultado;
  },
  containsRange: (rangoInicial, rangoFinal) => {
    let extremoIzquierdo, extremoDerecho;
    let primerRango = [
      ...rangoInicial.substring(1, rangoInicial.length - 1).split(",")
    ].map(elemento => parseInt(elemento));
    let segundoRango = [
      ...rangoFinal.substring(1, rangoFinal.length - 1).split(",")
    ].map(elemento => parseInt(elemento));

    if (rangoInicial[0] == "[") extremoIzquierdo = primerRango[0];
    else extremoIzquierdo = primerRango[0] + 1;

    if (rangoInicial[rangoInicial.length - 1] == "]")
      extremoDerecho = primerRango[1];
    else extremoDerecho = primerRango[1] - 1;
    let ans = true;

    if (extremoIzquierdo > rangoFinal[0]) ans = false;
    if (extremoDerecho < rangoFinal[1]) ans = false;

    return ans;
  }
};

module.exports = funcion;
