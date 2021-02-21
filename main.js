var http = require('http');
var fs = require('fs');
var url = require('url');
const { mainModule } = require('process');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    var title = 'Welcome';
    var description = 'Hello, Node.js';
    if(pathname === '/'){
      if(queryData.id === undefined){

        fs.readdir('./data', function(error, fileList){
          console.log(fileList);
          

          /*
          var list = `
          <ul>
              {<li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JS">JS</a></li>}
            </ul>`;
            */
          var list = '<ul>';
          var i = 0;
          while(i< fileList.length) {
            list = list + `<li><a href = "/?id=${fileList[i]}">${fileList[i]}</li>`;
            i = i+1;
          }
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          
          response.writeHead(200);
          response.end(template);
          list = list + '</ul>';
        })
        
      } else {
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JS">JS</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);