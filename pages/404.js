import React from "react";
import "../styles/404.module.scss";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Custom404() {
  const router = useRouter();
  return (
    <Layout>
      <div className="container_not-found">
        <h1>404 - Nie znaleziono strony</h1>
        <p onClick={() => router.push("/")}>Wróć do strony głównej</p>
      </div>
    </Layout>
  );
}
