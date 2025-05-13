import { apiClient } from "@/shared/api/apiClient";
import { PatchPatientResponseDTO, patientResponseDTO } from "./dto";

export const patientService = {
  getPatientAll: async (): Promise<patientResponseDTO[]> => {
    const response = await apiClient.get<patientResponseDTO[]>("/patient");
    return response;
  },
  getPatientsByInstitute: async (
    params: string
  ): Promise<patientResponseDTO[]> => {
    const response = await apiClient.get<patientResponseDTO[]>(
      `/patient/${params}`
    );

    return response;
  },
  patchDropPatient: async (ids: string[]): Promise<PatchPatientResponseDTO> => {
    const response = await apiClient.patch<PatchPatientResponseDTO>(
      "/patient/drop",
      { ids }
    );
    return response;
  },
};
