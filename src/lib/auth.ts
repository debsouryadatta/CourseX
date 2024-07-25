import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";

const BASE_URL = "https://coursex-bswq.onrender.com"

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Use the hard-coded BASE_URL instead of baseUrl
      if (url.startsWith("/")) return `${BASE_URL}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === BASE_URL) return url
      return BASE_URL
    },
    async signIn({ user, account, profile, email, credentials }) {
      // Custom sign-in logic if needed
      return true
    },
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  // Add this to explicitly set the base URL
  basePath: BASE_URL,
});
