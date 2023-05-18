import NextAuth, { DefaultSession } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"


declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      claims: string[]
    } & DefaultSession["user"],
    expires: DefaultSession["expires"],
  };
}
declare module "next-auth/jwt" {
  interface JWT {
    /** The user's postal address. */
    claims: string[]
    name?: defaultJWT["name"]
    email?: defaultJWT["email"]
    picture?: defaultJWT["picture"]
    sub?: defaultJWT["sub"]
  }
}