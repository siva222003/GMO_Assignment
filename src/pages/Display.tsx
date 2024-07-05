import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkData } from "../helpers";
import axios from "axios";
import { PostType } from "../types";
import DataTable from "../components/display/DataTable";
import { Box, Typography } from "@mui/material";
import Departments from "../components/display/Departments";

const Display = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const filled = checkData();

    if (!filled) {
      navigate("/");
      return;
    }

    const fetchData = async () => {
      const res = await axios.get<PostType[]>(" https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };
    fetchData();
  }, [navigate]);

  return (
    <Box px={4}>
      <Typography variant="h4" my={2} fontFamily="monospace">
        Posts
      </Typography>

      <DataTable posts={posts} />

      <Typography variant="h4" my={3} fontFamily="monospace">
        Departments
      </Typography>

      <Departments />
    </Box>
  );
};

export default Display;
