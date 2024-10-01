import jwt from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
  console.log("----- verifyJWT called -----");

  console.log("Request headers:", req.headers);

  const authHeader = req.headers.authorization || req.headers.Authorization;
  console.log("...verifying authorization...");

  console.log("Bearer token: ");
  console.log(authHeader);

  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];
  console.log("Extracted token:");
  console.log(token);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("Verification failed: ", err);
      return res.sendStatus(403);
    }

    console.log("...continuing jwt.verify...");
    console.log("Route being called is:");
    req.user = decoded.username;
    next();
    console.log("...jwt.verify complete!");
  });
  console.log("----- verifyJWT ended -----");
};

export default verifyJWT;
