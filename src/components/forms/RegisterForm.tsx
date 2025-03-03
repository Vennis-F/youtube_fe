import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Box } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { useState } from "react";
import apiFactory from "../../services/apiFactory";

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

const RegisterForm = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: {
    email: string;
    password: string;
    confirmation_password: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const user = await apiFactory.v1.userService.register(
        data.email,
        data.password,
        data.confirmation_password
      );
      console.log("User registered successfully:", user);
      alert("Registration successful!");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
    setLoading(false);
  };

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
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2, width: "100%" }}
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </Button>
    </Box>
  );
};

export default RegisterForm;
