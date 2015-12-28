var fs = require('fs');
var leituraAsync = function(arquivo){
  console.log("Fazendo leitura assíncrona");

  var inicio = new Date().getTime();
  fs.readFile(arquivo);
  var fim = new Date().getTime();

  console.log("Bloqueio Assincrono: " + (fim - inicio) + "ms");
}

module.exports = leituraAsync;
