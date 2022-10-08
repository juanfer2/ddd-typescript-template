import { Server } from "./server";

const port = process.env.PORT || '4001';
const server = new Server(port);

server.start();
