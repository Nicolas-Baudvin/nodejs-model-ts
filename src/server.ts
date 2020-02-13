import http from 'http';
import app from '.'
import errorHandler from 'errorhandler';

const normalizePort = (val: any) => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || "5000");

app.set("port", port);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
    const address = server.address();
    const bind = typeof address === "string" ? `pipe ${ address}` : `port ${ port}`;

    console.log(`Listening on ${ bind}`);
});

server.listen(port);
