import { QUERY_KEYS } from "@/shared/api/queryKey";
import { queryOptions } from "@tanstack/react-query";
import { patientService } from "./service";

export const patientQueries = {
  getPatient: queryOptions({
    queryKey: QUERY_KEYS.patient.base,
    queryFn: () => patientService.getPatientAll(),
  }),
};
