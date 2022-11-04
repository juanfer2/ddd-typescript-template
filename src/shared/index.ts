import { ServerBackend } from "./infrastructure/server";

const port = process.env.PORT || '4001';
const server = new ServerBackend(port);

server.start();
