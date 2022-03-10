import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Images from "../components/images";
import Gallery from "../components/gallery";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/modalActions";

import { Helmet } from "react-helmet";

function importAll(r) {
  return r.keys().map(r);
}

const bt_tes = importAll(
  require.context(
    "../assets/images/production/bt_tes/",
    false,
    /\.(png|jpe?g|webp|svg)$/
  )
);
const dreamer = importAll(
  require.context(
    "../assets/images/production/dreamer/",
    false,
    /\.(png|jpe?g|webp|svg)$/
  )
);
const illuminatus = importAll(
  require.context(
    "../assets/images/production/illuminatis/",
    false,
    /\.(png|jpe?g|webp|svg)$/
  )
);
const master = importAll(
  require.context(
    "../assets/images/production/master/",
    false,
    /\.(png|jpe?g|webp|svg)$/
  )
);
const magnam = importAll(
  require.context(
    "../assets/images/production/magnam/",
    false,
    /\.(png|jpe?g|webp|svg)$/
  )
);
const versus = importAll(
  require.context(
    "../assets/images/production/versus/",
    false,
    /\.(png|jpe?g|webp|svg)$/
  )
);
const navighator = importAll(
  require.context(
    "../assets/images/production/navighator/",
    false,
    /\.(png|jpe?g|webp|svg)$/
  )
);
const diffrent = importAll(
  require.context(
    "../assets/images/production/diffrent/",
    false,
    /\.(png|jpe?g|webp|svg)$/
  )
);
const elements = [
  {
    id: 0,
    open: true,
    photos: navighator,
    title: "NAVIGATHOR 30",
    alt: "Jednostka NAVIGATHOR 30",
  },
  {
    id: 1,
    open: false,
    photos: illuminatus,
    title: "TES 393 ILLUMINATUS",
    alt: "Jednostka TES 393 ILLUMINATUS",
  },
  {
    id: 2,
    open: false,
    photos: dreamer,
    title: "TES 32 DREAMER",
    alt: "Jednostka TES 32 DREAMER",
  },
  {
    id: 3,
    open: false,
    photos: magnam,
    title: "TES 28 MAGNAM",
    alt: "Jednostka TES 28 MAGNAM",
  },
  {
    id: 4,
    open: false,
    photos: versus,
    title: "TES 246 VERSUS",
    alt: "Jednostka TES 246 VERSUS",
  },
  {
    id: 5,
    open: false,
    photos: bt_tes,
    title: "TES 678 BT-TES 720",
    alt: "Jednostki TES 678 oraz BT-TES 720",
  },
  {
    id: 6,
    open: false,
    photos: master,
    title: "TES 550 MASTER",
    alt: "Jednostka TES 550 MASTER",
  },
  {
    id: 7,
    open: false,
    photos: diffrent,
    title: false,
    alt: "Inne modele jak i jednostki",
  },
];

const Production = () => {
  const [data, setData] = useState(elements);
  const [pickedOne, setPickedOne] = useState(data[0]);
  const [width, setWidth] = useState(1200);
  const switchState = useSelector((state) => state.switch);
  const dispatch = useDispatch();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setData(
      data.map((item) => {
        if (item.id === 0) {
          item.open = true;
          return item;
        }
        item.open = false;
        return item;
      })
    );
  }, []);

  useEffect(() => {
    let readyImages = pickedOne.photos.map((i) => {
      return {
        src: i,
      };
    });
    dispatch(actions.loadDataModal(readyImages));
  }, [pickedOne]);

  useEffect(() => {
    document
      .querySelector('.images-select--item[data-id="0"]')
      .classList.add("is-active");
    document.querySelector('.gallery[data-id="0"]').classList.add("is-active");
  }, []);

  const openLightBox = (index) => {
    dispatch(actions.setNumberModal(index));
    dispatch(actions.openModal());
  };

  const openExpand = async (element, index) => {
    data[pickedOne.id].open = false;
    data[element.id].open = true;
    await setPickedOne(element);
    setData(data);

    document.querySelectorAll(".gallery").forEach((gallery) => {
      gallery.classList.remove("is-active");
    });
    document
      .querySelectorAll(".images-select--item")
      .forEach((imagesSelector) => {
        imagesSelector.classList.remove("is-active");
      });

    document
      .querySelector('.images-select--item[data-id="' + index + '"]')
      .classList.add("is-active");
    setTimeout(() => {
      document
        .querySelector('.gallery[data-id="' + index + '"]')
        .classList.add("is-active");
    }, 300);
  };

  const mapExpands = (item, index) => {
    return (
      <span
        className="images-select--item"
        key={index}
        data-id={index}
        onClick={() => openExpand(item, index)}
      >
        {item.title ? item.title : switchState.language.productionModels}
      </span>
    );
  };

  const mapToImage = (photo, index, pickedOne) => {
    return (
      <Images key={index}>
        <img
          className={"productionImage"}
          src={photo}
          onClick={() => openLightBox(index)}
          alt={pickedOne.alt}
        />
      </Images>
    );
  };

  const renderAllImages = (data, index) => {
    return (
      <Gallery key={index}>
        <div className="gallery" data-id={index}>
          {data.photos.map((it, index) => mapToImage(it, index, pickedOne))}
        </div>
      </Gallery>
    );
  };

  const openSelector = () => {
    let selector = document.querySelector(".images-select__mobile");
    if (selector.classList.contains("is-active")) {
      selector.classList.remove("is-active");
    } else {
      selector.classList.add("is-active");
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Produkcja łodzi żaglowych i motorowych | Jacht Plast</title>
        <meta
          name="description"
          content="Zajmujemy się budową łodzi żaglowych jak i motorowych. Do każdego projektu podchodzimy z pasją i zaangażowaniem co gwarantuje zadowolenie naszych klientów!"
        />
      </Helmet>
      <h1>{switchState.language.productionHeader}</h1>
      <div className={"production"}>
        <div className={"c-container"}>
          <div className={"images-select"}>
            <div className={"images-select__content"}>
              {data.map(mapExpands)}
            </div>
          </div>
          <div
            className={"images-select__mobile"}
            onClick={() => openSelector()}
          >
            <span className="expand-selector">
              {pickedOne.title}
              <svg
                class="selector-arrow"
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" />
              </svg>
            </span>
            <div className={"images-select__mobile--content"}>
              {data.map(mapExpands)}
            </div>
          </div>
          <div className={"details"}>
            <div className={"galleryProd"}>{data.map(renderAllImages)}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Production;
