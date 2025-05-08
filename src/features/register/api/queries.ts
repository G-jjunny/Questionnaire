import { registerService } from "./service";

export const registerQueries = {
  register: {
    mutationFn: registerService.postRegister,
  },
};
