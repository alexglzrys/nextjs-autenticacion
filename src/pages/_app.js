import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    // SessionProvider es necesario si deseamos usar el hook useSession para recuperar la info de la sessión desde el cliente
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
