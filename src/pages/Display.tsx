import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkData } from "../helpers";
import DataTable from "../components/display/DataTable";
import { Box, Typography } from "@mui/material";
import Departments from "../components/display/Departments";
import useFetchPosts from "../hooks/useFetchPosts";

const Display = () => {
  const navigate = useNavigate();

  const { posts, loading } = useFetchPosts();

  useEffect(() => {
    const filled = checkData();

    if (!filled) {
      navigate("/", { state: { showAlert: true } });
      return;
    }
  }, [navigate]);

  return (
    <Box px={4}>
      <Typography variant="h4" my={2} fontFamily="monospace">
        Posts
      </Typography>

      <DataTable posts={posts} loading={loading} />

      <Typography variant="h4" my={3} fontFamily="monospace">
        Departments
      </Typography>

      <Departments />
    </Box>
  );
};

export default Display;
