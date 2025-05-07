export interface patientResponseDTO {
  id: string;
  isReceived: string;
  patientId: string;
  patientName: string;
  isMale: string;
  birthday: string;
  operationDate: string;
  institution: string | null;
  createdAt: string;
  updatedAt: string;
}
