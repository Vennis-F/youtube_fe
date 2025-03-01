import { Container } from "@mui/material";
import Header from "../components/layout/Header";
import ShareForm from "../components/forms/ShareForm";
import Footer from "../components/layout/Footer";

const ShareVideoPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <ShareForm />
      </Container>
      <Footer />
    </>
  );
};

export default ShareVideoPage;
