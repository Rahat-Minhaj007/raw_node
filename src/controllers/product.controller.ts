import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../services/product.service";
import type { IProduct } from "../types/products";
import { bodyParser } from "../utils/parseBody";

const productCOntroller = async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const urlParams = url?.split("/");
  const id =
    urlParams && urlParams["1"] === "products" ? Number(urlParams[2]) : null;
  if (url === "/products" && method === "GET") {
    const products = productService();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrieve successfully!",
        data: products,
      }),
    );
  } else if (method === "GET" && id !== null) {
    const products = productService();
    const product = products.find((p: IProduct) => p.id === id);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrieve successfully!",
        data: product,
      }),
    );
  } else if (method === "POST" && url === "/products") {
    const body = await bodyParser(req);
    console.log(body);
  }
};

export default productCOntroller;
