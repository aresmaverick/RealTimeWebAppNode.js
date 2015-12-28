var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  //A constante __dirname retorna o diretorio raiz da aplicacao.
  fs.readFile(__dirname + '/index.html', function(error, html){
    response.writeHeader(200, {'Content-Type': 'text/html'});
    response.write(html);
    response.end();
  });
});

server.listen(3000, function(){
  console.log('Executando Site Pessoal');
});
