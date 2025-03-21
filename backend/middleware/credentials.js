import allowedOrigins from "../config/allowedOrigins.js";

const credentials = (req, res, next) => {
  console.log("----- credentials called -----");
  // console.log("headers");
  // console.log(req.headers);
  console.log("headers - origin:");
  console.log(req.headers.origin);
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  } else console.log("origin not recognized");
  next();
  console.log("----- credentials ended -----");
};

export default credentials;
