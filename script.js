function conAlgarismo() {
  var numero = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  var simbolo = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'VIII', 'VII', 'VI', 'V', 'IV', 'III', 'II', 'I'];
  let num1 = parseInt(document.getElementById("num1").value);
  let resultRom = '';
  
  for (let i = 0; i < numero.length; ++i) {
    while (num1 >= numero[i]) {
      resultRom += simbolo[i];
      num1 -= numero[i];
    }
  }
  document.getElementById('resultRom').value = resultRom;
} 

function conRomano(){
  let num2 = document.getElementById("num2").value;
  var letras = num2.split("");
  var decimal = [1000, 500, 100, 50, 10, 5, 1];
  var romano = ['M', 'D', 'C', 'L', 'X', 'V', 'I']; 
  let resultAlg = 0;
  let atual = '';
  let prox = '';
  let vratual = 0;
  let vrprox = 0;

  for (let j = 0; j < letras.length; ++j){
    atual = letras[j];
    prox = letras[j+1];
    
    vratual = decimal[romano.indexOf(atual)];
    vrprox = decimal[romano.indexOf(prox)];

    if (vrprox > vratual) {
      resultAlg -= vratual;
    } else {
      resultAlg += vratual;
    }
  }
  document.getElementById('resultAlg').value = resultAlg;
}

