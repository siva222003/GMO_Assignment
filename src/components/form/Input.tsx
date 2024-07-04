import { TextField } from "@mui/material";

interface InputProps {
  label: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error: string;
}

const Input = ({ label, name, value, handleChange, error }: InputProps) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={(e) => handleChange(e)}
      error={!!error}
      helperText={error}
      fullWidth
    />
  );
};

export default Input;
