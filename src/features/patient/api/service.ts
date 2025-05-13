import { apiClient } from "@/shared/api/apiClient";
import { PatchPatientResponseDTO, patientResponseDTO } from "./dto";

export const patientService = {
  /** 전체 환자 리스트 조회 */
  getPatientAll: async (): Promise<patientResponseDTO[]> => {
    const response = await apiClient.get<patientResponseDTO[]>("/patient");
    return response;
  },

  /** patient Id 기반 조회 */
  getPatientsByInstitute: async (
    params: string
  ): Promise<patientResponseDTO[]> => {
    const response = await apiClient.get<patientResponseDTO[]>(
      `/patient/${params}`
    );

    return response;
  },

  /** ID 배열 기반 patient Drop */
  patchDropPatient: async (ids: string[]): Promise<PatchPatientResponseDTO> => {
    const response = await apiClient.patch<PatchPatientResponseDTO>(
      "/patient/drop",
      { ids }
    );
    return response;
  },

  // putEditPatient: async (patient) => {
  //   const respose = await apiClient.put<>(`/edit/${patient}`, {patient})
  // }
};
