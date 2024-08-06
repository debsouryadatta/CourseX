import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";

const RENDER_EXTERNAL_URL = "https://coursex-bswq.onrender.com"

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    // async redirect({ url, baseUrl }) {
    //   const forcedBaseUrl = RENDER_EXTERNAL_URL
    //   if (url.startsWith("/")) return `${forcedBaseUrl}${url}`
    //   else if (new URL(url).origin === forcedBaseUrl) return url
    //   return forcedBaseUrl
    // }
  },
  providers: [Google],
});