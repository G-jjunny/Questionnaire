import { patientResponseDTO } from "../api/dto";

export const sortByCreatedAtDesc = (patients: patientResponseDTO[]) => {
  return [...patients].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};
