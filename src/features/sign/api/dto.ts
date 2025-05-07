export interface LoginDTO {
  accountId: string;
  password: string;
}

export interface LoginResponseDTO {
  message: string;
  user: {
    id: number;
    accountId: string;
    role: "USER" | "ADMIN";
    institution: string;
  };
}
