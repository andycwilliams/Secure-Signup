// React Imports
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks Imports
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Users = () => {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal,
        });
        // "response.data" displays ALL data, including passwords
        console.log(response.data);
        const userNames = response.data.map((user) => user.username);
        // isMounted && setUsers(response.data);
        isMounted && setUsers(userNames);
      } catch (err) {
        console.error(err);
        navigate("/signin", { state: { from: location }, replace: true });
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Typography component="h2" variant="h5">
        Users List
      </Typography>
      {users?.length ? (
        <Typography component="ul">
          {users.map((user, i) => (
            <Typography component="li" key={i}>
              {user}
            </Typography>
          ))}
        </Typography>
      ) : (
        <Typography>No users to display</Typography>
      )}
    </Box>
  );
};

export default Users;
