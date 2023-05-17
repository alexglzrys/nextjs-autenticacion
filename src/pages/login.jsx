import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const LoginScreen = () => {
  const router = useRouter();

  // Si se tienen registrados varios providers, 
  // Next Auth cuenta con una funcón que muestra en un objeto un listado de cada uno de ellos con sus respectivas configuraciones
  // Para proceder a recorrerlos y pintarlos en el FrontEnd
  useEffect(() => {
    (async () => {
      const providers = await getProviders();
      console.log(providers);
    })();
  }, []);

  const handlerLoginWithGithub = async (e) => {
    // Next Auth cuenta con funciones preconstruidas para realizar diferentes acciones relacionadas con la autenticación
    // Sin que sea necesario lanzar peticiones HTTP a su respectiva Rest API
    await signIn("github", {
      callbackUrl: "/",
      redirect: false,
    });
  };

  return (
    <main>
      <button onClick={(e) => router.push("/api/auth/signin/github")}>
        Logearse con Github
      </button>
      <button className="login" onClick={handlerLoginWithGithub}>
        Github
      </button>
    </main>
  );
};

export default LoginScreen;
