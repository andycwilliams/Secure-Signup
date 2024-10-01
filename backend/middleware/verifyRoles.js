const verifyRoles = (...allowedRoles) => {
  console.log("----- verifyRoles called -----");
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    console.log("Roles array:");
    console.log(rolesArray);
    console.log("req.roles:");
    console.log(req.roles);
    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((value) => value === true);
    if (!result) return res.sendStatus(401);
    next();
    console.log("----- verifyRoles ended -----");
  };
};

export default verifyRoles;
