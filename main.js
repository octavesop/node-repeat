var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    console.log(queryData.id);
    console.log(_url);

    if(_url == '/') {
        title = 'Welcome!';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);

    var template = 
    `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <h1>${title}</h1>
            <ol>
                <li><a href = "/?id=HTML">HTML</a></li>
                <li><a href = "/?id=CSS">CSS</a></li>
                <li><a href = "/?id=JS">JS</a></li>
            </ol>
        </body>
        </html>
    `;

    response.end(template);
});
app.listen(3000);