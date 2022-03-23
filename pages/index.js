import React from "react";
import dynamic from 'next/dynamic';
import Layout from "../components/Layout";
import exteriorImage from "../assets/images/about_us/hala_out.webp";
import interiorImage from "../assets/images/about_us/hala_in.webp";
import ramImage from "../assets/images/about_us/ram.webp";
import transortImage from "../assets/images/transport/20190425_191434.webp";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
const JachtSlider = dynamic(() => import("../components/JachtSlider"));

const Home = () => {
  const switchState = useSelector((state) => state.switch);
  let structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jacht Plast",
    legalName: "PHUP Jacht Plast",
    url: "https://www.jacht-plast.pl/",
    logo: "https://www.jacht-plast.pl/_next/static/images/logo-d4243a7efeb7684594888ac2f4fe7d5e.png",
    description:
      "Profejsonalny transport i produkcja jachtów. Firma Jacht Plast świadczy usługi logistyczno transportowe oraz budowy jachtów łodzi żaglowych oraz motorowych",
    founders: [
      {
        "@type": "Person",
        name: "Zdzisław Sobolewski",
      },
    ],
    openingHours: [
      "Mo-Fr 07:00-16:00",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Przemysłowa 4",
      addressLocality: "Drzewica",
      addressRegion: "PL",
      postalCode: "26-340",
      addressCountry: "Polska",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "601256133",
      email: "jachtplast@gmail.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "19"
    },
    sameAs: [
      "https://www.facebook.com/Jacht-Plast-Zdzis%C5%82aw-Sobolewski-1328748387208685",
    ],
  };

  let structuredDataWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.jacht-plast.pl/",
  };

  return (
    <Layout>
      <Helmet>
        <title>Budowa i Transport Jachtów | Jacht-Plast</title>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(structuredDataWebsite)}
        </script>
        <meta
          name="description"
          content="Profejsonalna budowa i transport jachtów. Świadczymy usługi transportu łodzi żaglowych jak i motorowych. Transport jachtów na terenie Polski oraz Europy."
        />
      </Helmet>

      <JachtSlider />
      <h1>{switchState.language.aboutUsHeader}</h1>
      <div className={"about_us_div"}>
        <div className={"about_us_first"}>
          <img
            src={exteriorImage}
            className={"about_us_photo"}
            alt={"Siedziba firmy Jacht-Plast"}
          />
          <div>{switchState.language.aboutUsFirstText}</div>
        </div>
        <div className={"about_us_first"}>
          <div>{switchState.language.aboutUsSecondText}</div>
          <img
            src={ramImage}
            className={"about_us_photo"}
            alt={"Transport jachtu z wykorzystaniem przyczepy"}
          />
        </div>
        <div className={"about_us_first"}>
          <img
            src={transortImage}
            className={"about_us_photo"}
            alt={"Transport łodzi motorowej przy użyciu naczepy"}
          />
          <div>{switchState.language.aboutUsThirdText}</div>
        </div>
        <div className={"about_us_first"}>
          <div>{switchState.language.aboutUsFourthText}</div>
          <img
            src={interiorImage}
            className={"about_us_photo"}
            alt={"Produkcja łodzi żaglowych przy użyciu tradycyjnych metod"}
          />
        </div>
      </div>
    </Layout>
  );
};
export default Home;
