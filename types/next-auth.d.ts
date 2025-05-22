import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    userId: string;
    role: string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userId: string;
    role: string;
  }
}
