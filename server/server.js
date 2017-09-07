const jsonServer = require('json-server');

const path = require('path');
console.log(__dirname);
const server = jsonServer.create();
const dataRouter = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
    static: __dirname
});

server.use(middlewares);
server.use('/api', dataRouter);
server.get(['/employees', '/employees/:id', '/departments', '/departments/:id'], (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
server.listen(process.env.PORT || 3000, () => {
    console.log('server started');
});