import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../services/product.service";

const productCOntroller = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  if (url === "/products" && method === "GET") {
    const products = productService();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrieve successfully!",
        data: products,
      }),
    );
  }
};

export default productCOntroller;
