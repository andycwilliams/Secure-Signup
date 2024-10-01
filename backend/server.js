import express from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
import verifyJWT from "./middleware/verifyJWT.js";
// import routes from "./routes/router.js";
// import employeeRoutes from "./routes/api/employees.js";
import userRoutes from "./routes/api/users.js";
import authRoutes from "./routes/auth.js";
import refreshRoutes from "./routes/refresh.js";
// import signoutRoutes from "./routes/signout.js";
import signupRoutes from "./routes/signup.js";
import cookieParser from "cookie-parser";
import "./db/connection.js";

const app = express();
const PORT = 8001;

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
// app.use("/signout", signoutRoutes);

app.use(verifyJWT);
// app.use("/employees", employeeRoutes);
app.use("/users", userRoutes);

app.listen(PORT, console.log(`Now listening on PORT: ${PORT}`));
