const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require('./config/db');

// Handling Uncaught Execption
process.on("uncaughtException",(err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
}); 


dotenv.config({path:"backend/config/.env"})

// connect to db
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejaction
process.on("unhandledRejection",(err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to unhandler promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});