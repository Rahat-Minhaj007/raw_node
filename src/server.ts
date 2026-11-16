import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routerHandler from "./routes/route";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routerHandler(req, res);
  },
);

server.listen(5001, () => {
  console.log(`server is running on port ${5001}`);
});
