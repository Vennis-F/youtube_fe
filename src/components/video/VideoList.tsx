import { Video } from "../../types/video";
import VideoCard from "./VideoCard";
import { Box, Container, Typography } from "@mui/material";

interface VideoListProps {
  videos: Video[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  console.log("videos: ", videos);
  return (
    <Container maxWidth="md">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
        {videos.length > 0 ? (
          videos.map((video) => <VideoCard key={video.id} video={video} />)
        ) : (
          <Typography textAlign="center" color="textSecondary">
            No videos found.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default VideoList;
