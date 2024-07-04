import { FormType } from "../../types";
import { formInputs } from "../../constants";
import Input from "./Input";

interface InputListProps {
  data: FormType;
  errors: FormType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onConfirm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputList = ({ data, errors, handleChange }: InputListProps) => {
  return (
    <>
      {formInputs.map((formInput, index) => (
        <Input
          key={index}
          label={formInput.label}
          name={formInput.name}
          value={data[formInput.name as keyof FormType]}
          handleChange={handleChange}
          error={errors[formInput.name as keyof FormType]}
        />
      ))}
    </>
  );
};

export default InputList;
