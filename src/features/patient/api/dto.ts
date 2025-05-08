import { PatientType } from "../model/patientTable";

export interface patientResponseDTO extends PatientType {
  createdAt: string;
  updatedAt: string;
}
