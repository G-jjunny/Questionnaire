import { z } from "zod";
import registerSchema from "./schema";

export type registerSchema = z.infer<typeof registerSchema>;

export const steps = ["first", "second", "thired"] as const;
