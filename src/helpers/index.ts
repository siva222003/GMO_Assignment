import { FormType } from "../types";

/*-- Validate Form --*/
export const validateForm = (data: FormType) => {
  const errors: any = {};

  if (!data.name) {
    errors.name = "Name is required";
  }
  if (!data.email) {
    errors.email = "Email is required";
  }
  if (!data.phone) {
    errors.phone = "Phone is required";
  }

  return errors;
};


/*-- Add item to LocalStorage --*/
export const setItem = (key: string, value: FormType) => {
  try {
    if (!value) return;

    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};


/*-- Check data stored in LocalStorage and return a boolean --*/
export const checkData = () => {
  try {
    const value = localStorage.getItem("data");

    if (!value) return false;

    const parsedData = JSON.parse(value);

    if (!parsedData.name || !parsedData.phone || !parsedData.email) {
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
