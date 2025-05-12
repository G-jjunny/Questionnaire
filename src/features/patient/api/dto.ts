import { PatientType } from "../model/patientTable";

export interface patientResponseDTO extends PatientType {
  createdAt: string;
  updatedAt: string;
}

export interface GetPatientParams {
  role?: string;
  institution?: string;
}
export interface PatchPatientResponseDTO {
  message: string;
}
