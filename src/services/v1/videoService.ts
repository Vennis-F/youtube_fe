import { ApiResponse } from "../../types/api";
import { Video } from "../../types/video";
import createApiClient from "../apiClient";

const apiV1 = createApiClient("v1");

const videoServiceV1 = {
  fetchVideos: async (): Promise<Video[]> => {
    const response = await apiV1.get<ApiResponse<Video[]>>("/videos");
    console.log("ApiV1 ", apiV1);
    console.log("ApiV1 response", response);
    return response.data.data;
  },

  shareVideo: async (title: string, url: string): Promise<Video> => {
    const response = await apiV1.post<ApiResponse<Video>>("/videos", {
      title,
      url,
    });
    return response.data.data;
  },
};

export default videoServiceV1;
