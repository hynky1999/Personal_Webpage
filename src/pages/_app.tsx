import 'bulma/css/bulma.min.css';
import "../css/global.css";
import { SessionProvider } from "next-auth/react";


export default function MyApp({ Component, pageProps }) {
  return (

    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />;
    </SessionProvider >
  )
}



