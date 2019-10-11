import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from "../components/Layout";

const Home = () => (
    <Layout>
        <div className={"about_us_div"} style={{height: 1000, backgroundColor: 'gray'}}>
            <h3>Firma ,,JACHT – PLAST” zajmuje się budową jachtów żaglowych i motorowych.Od wielu lat jesteśmy głównym
                wykonawcą marki ,,TES” . Jachty przez nas wykonane charakteryzują się ciekawą zabudową
                wnętrza,zapewniają komfort i wygodę na miarę potrzeb każdego klienta. Nasze jednostki spełniają wymagane
                standardy jakości i bezpieczeństwa.
                Posiadamy również wieloletnie doświadczenie w produkcji laminatów poliestrowo – szklanych. Nasze wyroby
                produkowane są z wysokiej jakości materiałów, co zapewnia im trwałość w użytkowaniu. Duże możliwości
                produkcyjne oraz wieloletnie doświadczenie zawodowe pracowników, dają gwarancję solidnego wykonania
                wyrobu.
                Zapewniamy serwis wykonanych łodzi oraz świadczymy usługi napraw i remontów używanego sprzętu
                pływającego.
                Współpracujemy z wieloma dostawcami, zapewniając naszym klientom wybór urządzeń wyposażenia jachtu.
                Dzięki wieloletniemu doświadczeniu w produkcji laminatów, realizujemy również zlecenia na dowolny rodzaj
                wyrobów laminatowych.</h3>
        </div>
    </Layout>
);

export default Home;
