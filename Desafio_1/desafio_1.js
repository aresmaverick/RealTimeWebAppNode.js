var ARTIGOS = 'artigos';
var CONTATO = 'contato';
var defaultPage = '/artigos';

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request,response){
  var urlParsed = url.parse(request.url, true);
  var fileName = __dirname;

  response.writeHeader(200, {'Content-Type': 'text/html'});

  if (urlParsed.pathname === "/") {
    fileName = fileName.concat(defaultPage + '.html');
  } else {
    fileName = fileName.concat(urlParsed.pathname + '.html');
  }

  if (!fs.existsSync(fileName)) {
    fileName = __dirname + '/erro.html';
  }

  fs.readFile(fileName, function(erro, html){
    response.end(html);
  });
});

server.listen(3000, function(){
  console.log('Executando Server do Desafio 1');
});
