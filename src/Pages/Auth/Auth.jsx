import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Auth.scss";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Carousel } from "primereact/carousel";

export default function LoginPage() {
  const [pageTitle, setPageTitle] = useState("Login");
  const [items, setItems] = useState([
    {
      id: 1,
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "Assets/Carousel/AccessAndLifeCarousel.png",
    },
    {
      id: 2,
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "Assets/Carousel/AjaxIndoorCarousel.png",
    },
    {
      id: 3,
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "Assets/Carousel/AjaxOutdoorCarousel.png",
    },
    {
      id: 4,
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "Assets/Carousel/CablesAndInfrastructureCarousel.png",
    },
    {
      id: 5,
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "Assets/Carousel/NetworkAndWifiCarousel.png",
    },
    {
      id: 6,
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "Assets/Carousel/ShellyCarousel.png",
    },
  ]);

  const itemTemplate = (item) => (
    <div className="carousel-item">
      <p className="carousel-title">{item.title}</p>
      <img src={item.imageUrl} width={"100%"} style={{ borderRadius: "8px" }} />
      <span className="carousel-description">{item.description}</span>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="login-page">
        <div className="login-form-container">
          {" "}
          <FloatLabel className="w-100 m-5">
            <InputText className="w-50" />
            <label>Aloooooooooooooo</label>
          </FloatLabel>
        </div>
        <div className="carousel-container">
          <Carousel
            value={items}
            numVisible={1}
            numScroll={1}
            itemTemplate={itemTemplate}
            showIndicators={false}
            // showNavigators={false}
            autoplayInterval={8000}
          />
        </div>
      </div>
    </>
  );
}
