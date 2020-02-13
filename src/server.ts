import http from 'http';
import app from '.'
import errorHandler from 'errorhandler';

const normalizePort = (val: string): number | string | boolean => {
    const port: number = Number(val);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port: string | number | boolean = normalizePort(process.env.PORT || "5000");

app.set("port", port);

app.use(errorHandler());

const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
    const address = server.address();
    const bind = typeof address === "string" ? `pipe ${ address}` : `port ${ port}`;

    console.log(`Listening on ${ bind}`);
});

server.listen(port);
