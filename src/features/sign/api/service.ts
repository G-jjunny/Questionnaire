import { apiClient } from "@/shared/api/apiClient";
import { LoginDTO, LoginResponseDTO } from "./dto";
import { useUserStore } from "@/shared/store/useStore";

export const authService = {
  login: async (data: LoginDTO): Promise<LoginResponseDTO> => {
    const response = await apiClient.post<LoginResponseDTO>("/login", data);

    // zustand store에 저장
    useUserStore.getState().setUser(response.user);

    return response;
  },
};
