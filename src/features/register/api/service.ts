import { apiClient } from "@/shared/api/apiClient";
import { GroupResponseDTO, RegisterDTO, RegisterResponseDTO } from "./dto";

export const registerService = {
  postRegister: async (data: RegisterDTO): Promise<RegisterResponseDTO> => {
    const response = await apiClient.post<RegisterResponseDTO>(
      "/register",
      data
    );

    return response;
  },
  getGroupByNeoadj: async (type: string): Promise<GroupResponseDTO> => {
    const response = await apiClient.get<GroupResponseDTO>(
      `/group?type=${type}`
    );
    return response;
  },
};
