import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface CustomTextFieldProps {
  name: string;
  label: string;
  control: any;
  type?: string;
}

const CustomTextField = ({
  name,
  label,
  control,
  type = "text",
}: CustomTextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          margin="normal"
          label={label}
          type={type}
          error={!!error}
          helperText={error ? error.message : ""}
        />
      )}
    />
  );
};

export default CustomTextField;
