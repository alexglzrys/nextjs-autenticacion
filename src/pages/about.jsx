import { getSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AboutScreen = () => {
  const [user, setUser] = useState(null);

  // Recuperar información almacenada en la Sessión desde el cliente
  useEffect(() => {
    // Función IFFE (invocada automáticamente)
    (async () => {
      const session = await getSession();
      // Guardar información del usuario en estado local
      setUser(session.user);
    })();
  }, []);

  return (
    <main>
      <header>
        <figure className="avatar">
          <Image
            src={user?.image}
            alt={user?.name}
            width={60}
            height={60}
            className="avatar__image"
          />
          <figcaption className="avatar__info">
            <h5 className="avatar__name">{user?.name}</h5>
            <p className="avatar__email">{user?.email}</p>
          </figcaption>
        </figure>
      </header>
    </main>
  );
};

export default AboutScreen;
