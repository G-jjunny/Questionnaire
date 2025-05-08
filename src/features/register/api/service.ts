import { apiClient } from "@/shared/api/apiClient";
import { RegisterDTO, RegisterResponseDTO } from "./dto";

export const registerService = {
  postRegister: async (data: RegisterDTO): Promise<RegisterResponseDTO> => {
    const response = await apiClient.post<RegisterResponseDTO>(
      "/register",
      data
    );

    return response;
  },
};
