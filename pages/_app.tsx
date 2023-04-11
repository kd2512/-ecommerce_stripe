import { Layout } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* this below <Component ...> is the current component that we are on, 
      e.g. if we are on any product page then component is the product,
      if we are on index then index */}
      <Component {...pageProps} />
    </Layout>
  );
}
