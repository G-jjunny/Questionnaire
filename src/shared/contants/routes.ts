export const ROUTES = {
  // private
  ROOT: "/",
  REGISTER: "/register",
  LIST: {
    BASE: "/enrollmentlist",
    Detail: (patientId: string) => `/enrollmentlist/${patientId}`,
  },

  ADMIN: "/admin",

  // public
  SIGN: "/sign",
};
