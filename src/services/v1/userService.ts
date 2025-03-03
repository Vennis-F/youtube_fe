import { ApiResponse } from "../../types/api";
import createApiClient from "../apiClient";

const apiV1 = createApiClient("v1");

const userServiceV1 = {
  register: async (
    email: string,
    password: string,
    passwordConfirmation: string
  ): Promise<void> => {
    await apiV1.post<ApiResponse<void>>(
      "/users",
      {
        user: { email, password, password_confirmation: passwordConfirmation },
      },
      { withCredentials: true }
    );
  },
};

export default userServiceV1;
