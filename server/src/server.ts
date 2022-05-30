import app from "./app";
import http from "http";

const server = http.createServer(app);

const port = process.env.PORT || 1234;

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
