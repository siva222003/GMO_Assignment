import { useEffect, useState } from "react";
import { initialFormState } from "../constants";
import { Alert, Box, Button, Typography } from "@mui/material";
import InputList from "../components/form/InputList";
import { setItem, validateForm } from "../helpers";
import { useLocation, useNavigate } from "react-router-dom";

const Form = () => {
  const [formdata, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormState);

  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.showAlert) {
      setShowAlert(true);
      navigate(location.pathname, { state: { showAlert: false } });
    }
  }, [location.state]);

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
    clearForm();
  };

  const clearForm = () => {
    setFormData(initialFormState);
    setFormErrors(initialFormState);
  };

  return (
    <>
      {showAlert && (
        <Alert variant="filled" severity="warning">
          Please fill out the form before proceeding
        </Alert>
      )}
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
            px: 5,
            py: 4,
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h5"
            fontFamily="monospace"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            Personal Details
          </Typography>

          <InputList
            data={formdata}
            errors={formErrors}
            handleChange={handleChange}
            onConfirm={onConfirm}
          />

          <Button
            sx={{ fontFamily: "monospace" }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Submit
          </Button>
          <Button
            sx={{ fontFamily: "monospace" }}
            onClick={clearForm}
            variant="contained"
            color="error"
            fullWidth
          >
            Reset
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Form;
