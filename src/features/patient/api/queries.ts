import { GetPatientParams } from "./dto";
import { patientService } from "./service";

export const patientQueries = {
  getPatient: ({ role, institution }: GetPatientParams) => ({
    queryKey: ["patients", role, institution],
    queryFn: () => {
      if (role === "ADMIN") {
        return patientService.getPatientAll();
      }

      if (!institution)
        throw new Error("Institution is undefined for USER role");

      return patientService.getPatientsByInstitute(institution);
    },
  }),
};
