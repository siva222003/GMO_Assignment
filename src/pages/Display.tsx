import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (!data) {
      navigate("/");
      return;
    }

    const parsedData = JSON.parse(data);

    if (!parsedData.name || !parsedData.phone || !parsedData.email) {
      navigate("/");
      return;
    }
  }, [navigate]);

  return <div>Display Page</div>;
};

export default Display;
