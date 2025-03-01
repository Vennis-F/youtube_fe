import {
  Paper,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import { useState } from "react";

const ShareForm: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !videoUrl.trim()) {
      setError("Please enter both title and YouTube URL");
      return;
    }

    setError("");
    setSuccess(true);
    setVideoUrl("");
    setTitle("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 150px)",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 500,
          textAlign: "center",
          borderRadius: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Share a YouTube Movie
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!!error && !title.trim()}
            helperText={error && !title.trim() ? error : ""}
          />

          <TextField
            fullWidth
            label="YouTube URL"
            variant="outlined"
            margin="normal"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            error={!!error && !videoUrl.trim()}
            helperText={error && !videoUrl.trim() ? error : ""}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              px: 4,
              py: 1,
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#125ea5" },
            }}
          >
            Share
          </Button>
        </form>
      </Paper>

      {/* Snackbar - Hiển thị thông báo ở trung tâm phía trên */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Alert severity="success" onClose={() => setSuccess(false)}>
          Video shared successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ShareForm;
