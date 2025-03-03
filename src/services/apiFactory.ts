import userServiceV1 from "./v1/userService";
import videoServiceV1 from "./v1/videoService";

const apiFactory = {
  v1: {
    videoService: videoServiceV1,
    userService: userServiceV1,
  },
};

export default apiFactory;
