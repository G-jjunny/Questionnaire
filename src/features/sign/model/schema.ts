import { z } from "zod";

const formSchema = z.object({
  userId: z.string().min(2, {
    message: "UserID must be at least 2 characters.",
  }), // userID에 대한 스키마 정의
  userPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }), // userPassword에 대한 스키마 정의
});

export default formSchema;
