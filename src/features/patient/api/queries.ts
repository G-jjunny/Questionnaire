import { patientService } from "./service";

export const patientQueries = {
  getPatient: (institute?: string) => ({
    queryKey: ["patients", institute],
    queryFn: () =>
      institute === "ADMIN"
        ? patientService.getPatientAll()
        : patientService.getPatientsByInstitute(institute!),
  }),
};
