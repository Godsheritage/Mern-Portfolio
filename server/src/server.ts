import app from "./app";
import http from "http";

const server = http.createServer(app);

const port = process.env.PORT || 12345;

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
