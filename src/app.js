const server = require('./server/index.js');
const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Server listening at the port 8080`);
}).on('error', (err) => console.log(err));