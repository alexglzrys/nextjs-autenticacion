// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSession } from "next-auth/react"

export default async function handler(req, res) {
  // Next Auth nos permite obtener la session tanto en cliente como en el servidor
  // En el lado del servidor (Rest API) se le pasa el request como parámetro
  // En getServerSideProps se le pasa el context
  const session = await getSession({ req });
  
  if (!session) return res.status(403).json({message: 'Acceso no autorizado'});
  
  res.status(200).json({ name: 'John Doe' })
}
