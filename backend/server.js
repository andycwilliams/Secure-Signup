import express from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
// import routes from "./routes/router.js";
// import employeeRoutes from "./routes/api/employees.js";
import userRoutes from "./routes/api/users.js";
// import authRoutes from "./routes/auth.js";
// import refreshRoutes from "./routes/refresh.js";
// import signoutRoutes from "./routes/signout.js";
import signupRoutes from "./routes/signup.js";
import "./db/connection.js";

const app = express();
const PORT = 8001;

app.use(cors(corsOptions));

// app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// app.use(routes);

// app.use("/auth", authRoutes);
// app.use("/refresh", refreshRoutes);
// app.use("/signout", signoutRoutes);
app.use("/signup", signupRoutes);

// app.use(verifyJWT);
// app.use("/employees", employeeRoutes);
app.use("/users", userRoutes);

app.listen(PORT, console.log(`Now listening on PORT: ${PORT}`));
