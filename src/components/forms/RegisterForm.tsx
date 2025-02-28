import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Box } from "@mui/material";
import CustomTextField from "./CustomTextField";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmation_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const RegisterForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "100%" }}
    >
      <CustomTextField name="email" label="Email" control={control} />
      <CustomTextField
        name="password"
        label="Password"
        control={control}
        type="password"
      />
      <CustomTextField
        name="confirmation_password"
        label="Confirm Password"
        control={control}
        type="password"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2, width: "100%" }}
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
