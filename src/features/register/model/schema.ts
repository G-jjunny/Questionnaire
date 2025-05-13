import { z } from "zod";

const patientSchema = z.object({
  patientId: z
    .string()
    .min(1, { message: "patientId contain at least 1 character(s)" }),
  patientName: z
    .string()
    .min(1, { message: "patientName contain at least 1 character(s)" }),
  isMale: z.string(),
  birthday: z.string(),
  operationDate: z.string(),
});

export const registerSchema = patientSchema.extend({
  isReceived: z.string().min(1), // 등록시에만 필요
});

export const editSchema = patientSchema; // 수정에는 불필요
