export interface RegisterDTO {
  isReceived: string;
  patientId: string;
  patientName: string;
  isMale: string;
  institution: string | null | undefined;
  birthday: string;
  operationDate: string;
  group: string;
  serialNum: string;
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

export interface GroupResponseDTO {
  id: string;
  group: string;
  serial: string;
}
