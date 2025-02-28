import { Container, Typography, Box } from "@mui/material";
import Layout from "../components/layout/Layout";

import { useDispatch } from "react-redux";
import { registerUser } from "../store/userSlice";
import RegisterForm from "../components/forms/RegisterForm";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegister = (data: any) => {
    dispatch(registerUser(data));
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box mt={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Register
          </Typography>
          <RegisterForm onSubmit={handleRegister} />
        </Box>
      </Container>
    </Layout>
  );
};

export default RegisterPage;
