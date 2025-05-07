import { apiClient } from "@/shared/api/apiClient";
import { LoginDTO, LoginResponseDTO } from "./dto";

export const authService = {
  login: async (data: LoginDTO): Promise<LoginResponseDTO> => {
    const response = await apiClient.post<LoginResponseDTO>("/login", data);

    return response;
  },
};
