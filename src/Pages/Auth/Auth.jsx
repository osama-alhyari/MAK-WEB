import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Auth.scss";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Carousel } from "primereact/carousel";
import { Image } from "primereact/image";
import { Password } from "primereact/password";
import { useTranslation } from "react-i18next";
import GeneralButton from "../../Components/GeneralButton";

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
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const { t, i18n } = useTranslation();

  const itemTemplate = (item) => (
    <div className="carousel-item">
      <p className="carousel-title">{item.title}</p>
      <img src={item.imageUrl} width={"100%"} style={{ borderRadius: "8px" }} />
      <span className="carousel-description">{item.description}</span>
    </div>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validate(name, value);
  };

  const validate = (name, value) => {
    let message = "";

    if (name === "phone") {
      if (!/^07\d{8}$/.test(value)) {
        message = "Phone must start with 07 and be 10 digits.";
      }
    }

    if (name === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = "Please enter a valid email address.";
      }
    }
    if (name === "password") {
      // Require: at least 1 uppercase, 1 lowercase, 1 digit, 1 special char, min 8 chars
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!passwordRegex.test(value)) {
        message =
          "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
      }
    }

    if (name === "confirmPassword") {
      if (value !== formData.password) {
        message = "Passwords do not match.";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="login-page">
        <div className="login-form-container">
          <div className="login-inner-container">
            <Image
              src="Assets/Logos/BlackMakLogoWithName.png"
              alt="ModernAppliancesKingdom"
              width="300px"
            />
            <div className="w-100 d-flex justify-content-center align-items-center">
              <p className="welcome-message">
                Welcome, enter your details to continue.
              </p>
            </div>
            <div className="two-inputs-container">
              <FloatLabel className="w-50">
                <InputText
                  id="first-name"
                  className="w-100"
                  value={formData.firstName}
                  name="firstName"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="first-name">First Name</label>
              </FloatLabel>

              <FloatLabel className="w-50">
                <InputText
                  id="last-name"
                  className="w-100"
                  value={formData.lastName}
                  name="lastName"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="last-name">Last Name</label>
              </FloatLabel>
            </div>

            {/* Email + Jordanian Phone */}
            <div className="two-inputs-container">
              <div className="input-with-validation w-50">
                <FloatLabel className="w-100">
                  <InputText
                    id="email"
                    className="w-100"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    required
                    invalid={errors.email}
                  />
                  <label htmlFor="email">Email</label>
                </FloatLabel>
                {errors.email && (
                  <small className="input-error-text">{errors.email}</small>
                )}
              </div>
              <div className="input-with-validation w-50">
                <FloatLabel className="w-100">
                  <InputText
                    id="phone"
                    className="w-100"
                    value={formData.phone}
                    name="phone"
                    onChange={handleChange}
                    maxLength={10}
                    invalid={errors.phone}
                  />
                  <label htmlFor="phone">Jordanian Phone Number</label>
                </FloatLabel>
                {errors.phone && (
                  <small className="input-error-text">{errors.phone}</small>
                )}
              </div>
            </div>

            {/* Password + Confirm Password */}
            <div className="two-inputs-container">
              <div className="input-with-validation w-50">
                <FloatLabel className="w-100">
                  <Password
                    id="password"
                    type="password"
                    className="w-100"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    feedback={false}
                    invalid={errors.password}
                  />
                  <label htmlFor="password">Password</label>
                </FloatLabel>{" "}
                {errors.password && (
                  <small className="input-error-text">{errors.password}</small>
                )}
              </div>
              <div className="input-with-validation w-50">
                <FloatLabel className="w-100">
                  <Password
                    id="confirm-password"
                    type="password"
                    className="w-100"
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    feedback={false}
                    invalid={errors.confirmPassword}
                  />
                  <label htmlFor="confirm-password">Confirm Password</label>
                </FloatLabel>{" "}
                {errors.confirmPassword && (
                  <small className="input-error-text">
                    {errors.confirmPassword}
                  </small>
                )}
              </div>
            </div>
            <GeneralButton width={"100%"}>Sign Up</GeneralButton>
          </div>
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
