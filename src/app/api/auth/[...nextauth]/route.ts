// import { users } from "@/src/mock/users";
// import NextAuth, { NextAuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// const authOptions: NextAuthOptions = {
//     session: {
//         strategy: "jwt",
//     },
//     providers: [
//         CredentialsProvider({
//             name: 'Credentials',
//             credentials: {
//                 email: {},
//                 password: {}
//             },
//             async authorize(credentials) {
//                 // should be replaced with a real api call
//                 const user = users.find(user => user.email == credentials?.email)

//                 if (user && user.password === credentials?.password) {
//                     return user
//                 }
//                 return null;
//             }
//         })
//     ],
//     callbacks: {
//         async jwt({ user, token }) {
//             if (user) {
//                 token = { ...token, ...user }
//             }
//             return token;
//         },
//         async session({ session, token }) {
//             session.user = {
//                 ...session.user,
//                 role: token.role
//             }
//             return session;
//         },
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     pages: {
//         signIn: '/login',
//     }

// }
// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }

import NextAuth from 'next-auth'
import { options } from './options'

const handler = NextAuth(options)

export { handler as GET, handler as POST }

