const http = require('http');
const port = process.env.PORT || '5050';

const generateRandom = (min, max, prop) => {
    let random = (prop === 'price') 
    ? (Math.random() * (max - min) + min).toFixed(2)
    : Math.round(Math.random() * (max - min) + min);
    return random;
}

const result = {
    id: generateRandom(1,10, 'id'),
    title: `Producto ${generateRandom(1,10, 'title')}`,
    price: generateRandom(0.00, 9999.99, 'price'),
    thumbnail: `Foto ${generateRandom(1,10, 'thumbnail')}`
}

http.createServer(function(request, response){
    response.writeHead(200, {
        'Content-type' : 'text/json',
        'Access-Control-Allow-Origin' : '*',
        'X-Powered-By' : 'nodejs'
    });

    response.write(JSON.stringify(result));
    response.end();


}).listen(port, () => console.log("Listening on port " + port));
