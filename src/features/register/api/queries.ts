import { QUERY_KEYS } from "@/shared/api/queryKey";
import { registerService } from "./service";

export const registerQueries = {
  register: {
    mutationFn: registerService.postRegister,
  },
  getGroup: (type: string) => ({
    queryKey: [QUERY_KEYS.group.base, type],
    queryFn: () => registerService.getGroupByNeoadj(type),
  }),
};
