import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { Session, Profile, } from "next-auth"
import { JWT } from "next-auth/jwt"
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],

    callbacks: {
        async session({ session, token }: { token: JWT, session: Session}) {
            session.user.claims = token?.claims ?? []
            return session
        },
        async jwt({ token , profile  }: { token: JWT, profile?: Profile | undefined }) {
            const claims: String[] = token?.claims ?? []
            if (profile?.email) {
                if (token.email === process.env.ADMIN_EMAIL) {
                    claims.push("blogAdd")
                }
            }
            const jwt = { ...token, ...profile, claims} as JWT
            return jwt
        }
    },
}

export default NextAuth(authOptions)


