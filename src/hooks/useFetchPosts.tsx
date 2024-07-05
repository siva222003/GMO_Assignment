import { useEffect, useState } from "react";
import { PostType } from "../types";
import axios from "axios";

const useFetchPosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get<PostType[]>(" https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.log((error as Error).message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    posts,
    loading,
  };
};

export default useFetchPosts;
