import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@/generated/main";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        userId: { label: "userId", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("credentials undefined");
        }
        console.log(`credentials : ${JSON.stringify(credentials)}`)
        const { userId, password } = credentials;
        if (!userId || !password) {
          throw new Error("missing userId or password");
        }
        try {
          const user = await prisma.user.findUnique({
            where: { userId: parseInt(userId) },
          });
          if (!user) {
            throw new Error("invalid userId");
          }
          if (password !== user.password) {
            throw new Error("incorrect password");
          }
          return { id: user.id, userId, role: user.role };
        } catch (err) {
          console.log(err);
          throw new Error("auth error");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.userId = user.userId;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session.user.role = token?.role;
        session.user.userId = token?.userId as string;
        session.user.id = token?.sub as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
