import type { IncomingMessage, ServerResponse } from "http";
import productCOntroller from "../controllers/product.controller";

const routerHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is root route" }));
  } else if (url?.startsWith("/products")) {
    productCOntroller(req, res);
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is route not found" }));
  }
};

export default routerHandler;
