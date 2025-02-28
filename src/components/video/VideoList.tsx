import { useEffect, useState } from "react";
import { Video } from "../../types/video";
import VideoCard from "./VideoCard";
import { Box, Container } from "@mui/material";
import { videosData } from "../../mocks/videosData";

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    setVideos(videosData);
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </Box>
    </Container>
  );
};

export default VideoList;
