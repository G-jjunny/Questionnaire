export interface RegisterDTO {
  isReceived: string;
  patientId: string;
  patientName: string;
  isMale: string;
  institution: string | null | undefined;
  birthday: string;
  operationDate: string;
}

export interface PatientResponseDTO {
  id: string;
  isReceived: string;
  patientId: string;
  patientName: string;
  isMale: string;
  institution: string;
  birthday: string;
  operationDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterResponseDTO {
  message: string;
  patient: PatientResponseDTO;
}
