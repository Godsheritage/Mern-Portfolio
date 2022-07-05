"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const contactRoute_1 = __importDefault(require("./route/contactRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("combined"));
app.use("/", contactRoute_1.default);
// creating static assets for heroku tp build our file folder
if (process.env.NODE_ENV === "production") {
    //    create folder
    // express.static delivers static files(html,css). When we want to use build we want to serve this files in the build folder
    app.use(express_1.default.static(path_1.default.resolve(__dirname, "..", "public ")));
    // if client makes request we want to send idex.html frist, which in  reality is all the react app
    app.get("*", (req, res) => res.sendFile(path_1.default.resolve(__dirname, "..", "public ", "index.html")));
}
exports.default = app;
