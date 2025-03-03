import { useEffect, useState } from "react";
import VideoList from "./VideoList";
import { Box, CircularProgress, Typography } from "@mui/material";
import apiFactory from "../../services/apiFactory";
import { Video } from "../../types/video";

const VideoListContainer = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await apiFactory.v1.videoService.fetchVideos();
        setVideos(Array.isArray(response) ? (response as Video[]) : []);
      } catch (err) {
        console.error("Failed to fetch videos:", err);
        setError("Failed to load videos. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" textAlign="center">
        {error}
      </Typography>
    );
  }

  return <VideoList videos={videos} />;
};

export default VideoListContainer;
