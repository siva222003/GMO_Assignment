import { useState } from "react";
import { initialFormState } from "../constants";
import { Box, Button, Typography } from "@mui/material";
import InputList from "../components/form/InputList";
import { setItem, validateForm } from "../helpers";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formdata, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormState);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const onConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm(formdata);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setItem("data", formdata);

    navigate("/display");

    //clear inputs
    setFormData(initialFormState);
    setFormErrors(initialFormState);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={(e) => {
          onConfirm(e);
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h2" textAlign="center" gutterBottom>
          Personal Details
        </Typography>

        <InputList
          data={formdata}
          errors={formErrors}
          handleChange={handleChange}
          onConfirm={onConfirm}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
