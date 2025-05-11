import { z } from "zod";

const registerSchema = z.object({
  isReceived: z.string().min(1),
  patientId: z.string(),
  patientName: z.string(),
  isMale: z.string(),
  birthday: z.string(),
  operationDate: z.string(),
});

export default registerSchema;
