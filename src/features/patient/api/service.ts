import { apiClient } from "@/shared/api/apiClient";
import { patientResponseDTO } from "./dto";

export const patientService = {
  getPatientAll: async (): Promise<patientResponseDTO[]> => {
    const response = await apiClient.get<patientResponseDTO[]>("/patient");

    return response;
  },
};
