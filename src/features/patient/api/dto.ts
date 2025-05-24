export type PatientType = {
  id: string;
  isReceived: string;
  patientId: string;
  patientName: string;
  isMale: string;
  birthday: string;
  operationDate: string;
  serialNum: string;
  institution: string;
  droped?: boolean;
  group?: string | null;
};

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

export interface PutEditPatientDTO {
  isReceived: string;
  patientId: string;
  patientName: string;
  isMale: string;
  birthday: string;
  operationDate: string;
  institution: string;
  droped?: boolean;
  group?: string;
}

export interface PutEditResponseDTO extends PatientType {
  message: string;
}
