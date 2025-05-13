import { z } from "zod";
import { registerSchema } from "./schema";

export type registerSchema = z.infer<typeof registerSchema>;

export const STEP = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third",
};

export const steps = [STEP.FIRST, STEP.SECOND, STEP.THIRD] as (
  | "first"
  | "second"
  | "third"
)[];

export const stepField: Record<
  (typeof steps)[number],
  (keyof z.infer<typeof registerSchema>)[]
> = {
  first: ["isReceived"],
  second: ["patientId", "patientName", "isMale", "birthday", "operationDate"],
  third: [],
};
