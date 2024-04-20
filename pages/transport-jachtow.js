import React, { useEffect, useState } from "react";
import Expand from "react-expand-animated";
import Layout from "../components/Layout";
import Images from "../components/Images";
import Gallery from "../components/Gallery";
import { IoIosCheckmark } from "react-icons/io";
import Fade from "react-reveal/Fade";
import * as actions from "../redux/actions/modalActions";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import headerImageSrc from "../assets/images/slides/transport_header.webp";
import headerImageSecondSrc from "../assets/images/slides/transport_header_second.webp";
import ImagesDescService from "../config/imagesDesc.service";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../assets/images/transport/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

const Transport = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const switchState = useSelector((state) => state.switch);

  useEffect(() => {
    let readyImages = images.map((image) => {
      return {
        src: image,
      };
    });
    dispatch(actions.loadDataModal(readyImages));
  }, []);

  const openLightBox = (index) => {
    dispatch(actions.setNumberModal(index));
    dispatch(actions.openModal());
  };

  const mapToImage = (image, index) => {
    return (
      <Images key={index}>
        <img
          className={"image"}
          src={image}
          onClick={() => openLightBox(index)}
          alt={ImagesDescService.description[index].alt}
          title={ImagesDescService.description[index].title}
        />
      </Images>
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>Transport jachtu oraz przewóz łodzi | Jacht Plast</title>
        <meta
          name="description"
          content="Tansport jachtu z firmą Jacht Plast. Zajmujemy się przewozem łodzi motorowych oraz transportem jachtów żaglowych o masie nawet do 8 ton."
        />
      </Helmet>
      <div className={"transportText"}>
        <div className="c-banner-text" style={{ textAlign: "center" }}>
          <h1>{switchState.language.transportHeader}</h1>
        </div>

        <div className="c-header-banner">
          <img
            src={headerImageSrc}
            alt="Rozpoczęcie transportu jachtu żaglowego - wyjazd z siedziby firmy"
            title="Transport jachtu firmy TES"
          />
          <img
            src={headerImageSecondSrc}
            alt="Przewóz jachtu na przyczepie samochodem Dodge RAM"
            title="Przewóz jachtu na przyczepie"
          />
        </div>
        <Fade>
          <ul className={"transportList"}>
            <li>
              <IoIosCheckmark className={"checkmark"} alt={"Icon checkmark"} />
              {switchState.language.transportListOne}
            </li>
            <li>
              <IoIosCheckmark className={"checkmark"} alt={"Icon checkmark"} />
              {switchState.language.transportListTwo}
            </li>
            <li>
              <IoIosCheckmark className={"checkmark"} alt={"Icon checkmark"} />
              {switchState.language.transportListThree}
            </li>
            <li>
              <IoIosCheckmark className={"checkmark"} alt={"Icon checkmark"} />
              {switchState.language.transportListFour}
            </li>
            <li>
              <IoIosCheckmark className={"checkmark"} alt={"Icon checkmark"} />
              {switchState.language.transportListFive}
            </li>
          </ul>
        </Fade>
        <div
          className={"underList"}
          dangerouslySetInnerHTML={{
            __html: switchState.language.transportText,
          }}
        />
      </div>

      <Expand open={open} className={"transportExpand"} duration={500}>
        <div className={"transport-gallery"}>
          <Gallery>{images.map(mapToImage)}</Gallery>
        </div>
      </Expand>
    </Layout>
  );
};
export default Transport;
