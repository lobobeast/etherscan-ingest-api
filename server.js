// Library imports
const express = require('express');
const http = require('http');
const contractsRouter = require('./src/routes/contracts.route');

// Create the app using ExpressJS
const app = express();
app.use(express.json());
const server = http.createServer(app);
// Define the port to run the app
const port = 3000;

app.get('/health', (req, res) => {
    res.json({status: 'UP'});
});

app.use('/contracts/', contractsRouter);

// Error handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message: err.message});

    return;
});

server.listen(port, () => {
    console.log(`Running at port ${port}`);
});