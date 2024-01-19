const http = require('http');

const server = http.createServer((req, res) =>{
    //line below everything is inline. If taken out of line, youll get an error.
    //it also prints it on localhost:2013 
    res.write('<h1>Fist server ever created.</h1><h2>Its not much. For now.</h2><img src="https://httpstatusdogs.com/img/206.jpg" alt="206">')
    res.end()
})

server.listen(2013, ()=>{
    console.log('Greetings from your node server.')
})