import { Card, CardContent, Typography, Box } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Video } from "../../types/video";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const videoId = new URL(video.url).searchParams.get("v");

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 200,
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      {/* Cột bên trái: Video */}
      <Box sx={{ width: "40%", aspectRatio: "16/9", overflow: "hidden" }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "8px 0 0 8px", border: "none" }}
        ></iframe>
      </Box>

      <CardContent
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ color: "blue" }}>
          {video.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Shared by: <b>{video.shared_by}</b>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <ThumbUpIcon color="primary" />
            <Typography>{video.likes}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <ThumbDownIcon color="secondary" />
            <Typography>{video.dislikes}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
