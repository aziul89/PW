function éQuadradoMágico(matriz) {
    const n = matriz.length;
    
    const somaEsperada = (n * (n * n + 1)) / 2;
  
    for (let i = 0; i < n; i++) {
      let somaLinha = 0;
      for (let j = 0; j < n; j++) {
        somaLinha += matriz[i][j];
      }
      if (somaLinha !== somaEsperada) {
        return false;
      }
    }
  
    for (let j = 0; j < n; j++) {
      let somaColuna = 0;
      for (let i = 0; i < n; i++) {
        somaColuna += matriz[i][j];
      }
      if (somaColuna !== somaEsperada) {
        return false;
      }
    }
  
    let somaDiagonalPrincipal = 0;
    for (let i = 0; i < n; i++) {
      somaDiagonalPrincipal += matriz[i][i];
    }
    if (somaDiagonalPrincipal !== somaEsperada) {
      return false;
    }
  
    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < n; i++) {
      somaDiagonalSecundaria += matriz[i][n - 1 - i];
    }
    if (somaDiagonalSecundaria !== somaEsperada) {
      return false;
    }
  
    return true;
  }
  
  // Exemplo de uso:
  const matrizExemplo = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
  ];
  
  console.log(éQuadradoMágico(matrizExemplo)); 
  