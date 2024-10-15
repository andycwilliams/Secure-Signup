import express from "express";
import cors from "cors";
import credentials from "./middleware/credentials.js";
import corsOptions from "./config/corsOptions.js";
import cookieParser from "cookie-parser";
import verifyJWT from "./middleware/verifyJWT.js";
// import routes from "./routes/router.js";
import authRoutes from "./routes/auth.js";
import refreshRoutes from "./routes/refresh.js";
import signoutRoutes from "./routes/signout.js";
import signupRoutes from "./routes/signup.js";
import employeeRoutes from "./routes/api/employees.js";
import userRoutes from "./routes/api/users.js";
import "./db/connection.js";

const app = express();
const PORT = 8001;

// Handle credentials before CORS and fetch cookies credentials requirement
app.use(credentials);

app.use(cors(corsOptions));

// Handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// Middleware for cookies
app.use(cookieParser());

// app.use(routes);

app.use("/signup", signupRoutes);
app.use("/auth", authRoutes);
app.use("/refresh", refreshRoutes);
app.use("/signout", signoutRoutes);

// app.use("/users", verifyJWT, userRoutes);

app.use(verifyJWT);
app.use("/employees", employeeRoutes);
app.use("/users", userRoutes);

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, console.log(`Now listening on PORT: ${PORT}`));
