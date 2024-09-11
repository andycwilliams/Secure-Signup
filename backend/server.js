import express from "express";
// import logger from "morgan";
import cors from "cors";
import routes from "./routes/router.js";
import "./db/connection.js";

const app = express();
const PORT = 8001;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
// app.use(logger("dev"));
app.use(routes);

app.listen(PORT, console.log(`Now listening on PORT: ${PORT}`));
