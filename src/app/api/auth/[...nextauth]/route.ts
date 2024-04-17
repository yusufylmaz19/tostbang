import { users } from "@/src/mock/users";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                // should be replaced with a real api call
                const user = users.find(user => user.email == credentials?.email)

                // console.log('user', user, credentials)
                if (user && user.password === credentials?.password) {
                    return user
                }
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ user, token }) {
            //   update token if user is returned
            if (user) {
                token.user = user;
            }
            //   return final_token
            return token;
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    }

}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

