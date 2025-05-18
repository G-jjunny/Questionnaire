import { QUERY_KEYS } from "@/shared/api/queryKey";
import { GetPatientParams } from "./dto";
import { patientService } from "./service";

export const patientQueries = {
  getPatient: ({ role, institution }: GetPatientParams) => ({
    queryKey: [QUERY_KEYS.patient.base, role, institution],
    queryFn: () => {
      if (role === "ADMIN") {
        return patientService.getPatientAll();
      }

      if (!institution)
        throw new Error("Institution is undefined for USER role");

      return patientService.getPatientsByInstitute(institution);
    },
  }),
  patchDropPatient: () => ({
    mutationKey: [QUERY_KEYS.patient.base, "drop"],
    mutationFn: patientService.patchDropPatient,
  }),
  putEditPatient: {
    mutationKey: [QUERY_KEYS.patient.base, "edit"],
    mutationFn: patientService.putEditPatient,
  },
};
