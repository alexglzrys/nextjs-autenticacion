/**
 * Cualquier petición a la ruta /api/auth/....
 * Será procesada por este archivo.
 * 
 * Ver la sección de REST API de Next Auth para un contexto más claro de las diferentes rutas
 * incolucradas en el proceso de autenticación
 */

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth/next"
import GithubProvider from 'next-auth/providers/github'
import clientPromise from '@/lib/mongoClient'

// Configuración de proveedores y rutas dinámicas de autenticación
export const authOptions = {
    providers: [
        // Crear una aplicación en nuestra cuenta de Github - https://github.com/settings/apps
        // OAuth Apps
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    // Los adaptadores en Next Auth nos permiten guardar la info publica de la sessión en base de datos
    // Entonces la info se tiene tanto en la Cookie de sessión como en la BD
    adapter: MongoDBAdapter(clientPromise),
}

export default NextAuth(authOptions);