import cors from "cors";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import contactRoute from "./route/contactRoute";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.use("/", contactRoute);
 
// creating static assets for heroku tp build our file folder
if (process.env.NODE_ENV === "production") {
  //    create folder
  // express.static delivers static files(html,css). When we want to use build we want to serve this files in the build folder
  app.use(express.static(path.resolve(__dirname, "..", "dists")));
  // if client makes request we want to send idex.html frist, which in  reality is all the react app
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "..", "dists", "index.html"))
  );
}

export default app;
