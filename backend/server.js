import express from "express";
import cors from "cors";

const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());

app.listen(PORT, console.log(`Now listening on PORT: ${PORT}`));
