import VideoList from "../components/video/VideoList";
import Layout from "../components/layout/Layout";
import { Typography, Box, Container } from "@mui/material";

const HomePage = () => {
  return (
    <Layout>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          🎬 Welcome to Video Sharing Platform
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Enjoy and share amazing videos with the world!
        </Typography>
      </Box>
      <Container maxWidth="xl">
        <VideoList />
      </Container>
    </Layout>
  );
};

export default HomePage;
