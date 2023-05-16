import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ContactScreen = () => {
  // Recuperar información almacenada en la Sessión desde el cliente
  // Mediante el uso de Hook personalizados de NextAuth
  // Para usar este hook es necesario envolver nuestra aplicación en un SessionProvider
  const { data: session, status } = useSession();

  const router = useRouter();

  // Mostrar un loader mientras recuperamos los datos de la sessión
  if (status == "loading") {
    return <div>Cargando...</div>;
  }

  // Redireccionar a página de login si el usuario no esta autenticado
  if (status == "unauthenticated") {
    // return router.push('/login');

    // Si requerimos mostrar un skeleton antes de la redirección
    // como no hay un return, se muestra por un momento la vista mientras se está redireccionando
    router.push("/login");
  }

  return (
    <main>
      {session ? (
        <header>
          <figure className="avatar">
            <Image
              src={session.user?.image}
              alt={session.user?.name}
              width={60}
              height={60}
              className="avatar__image"
            />
            <figcaption className="avatar__info">
              <h5 className="avatar__name">{session.user?.name}</h5>
              <p className="avatar__email">{session.user?.email}</p>
            </figcaption>
          </figure>
        </header>
      ) : (
        <div>Skeleton CSS o SVG</div>
      )}
    </main>
  );
};

export default ContactScreen;
