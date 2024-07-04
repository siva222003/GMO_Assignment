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

/*-- Get item from LocalStorage --*/
export const getItem = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
