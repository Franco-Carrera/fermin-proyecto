import "./Home.css";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import texts from "../../layout/sectionsText/Home.texts.json";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo0 from "../../assets/image/LogoFermin0.svg";
import rectangle1 from "../../assets/image/Rectangle1.svg";
import rectangle2 from "../../assets/image/Rectangle2.svg";
import rectangle3 from "../../assets/image/Rectangle3.svg";
import logo1 from "../../assets/image/LogoFermin1.svg";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  const [offSetY, setOffSetY] = useState(0);

  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <NavBar />

      <ReactSVG src={logo0} alt="logo0" className="image__0" />
      <section id="home" className="main sectionChangeStart">
        <main
          className="main__col Parallax__content"
          style={{ transform: `translateX(-${offSetY * 0.5}px)` }}
        >
          <aside className="main__col__rectangles">
            <ReactSVG
              src={rectangle1}
              className="rectangle__one"
              alt={texts.texts.home.firstSection.rectangle}
            />
            <ReactSVG
              src={rectangle2}
              className="rectangle__two"
              alt={texts.texts.home.firstSection.rectangleTwo}
            />
            <ReactSVG
              src={rectangle3}
              className="rectangle__three"
              alt={texts.texts.home.firstSection.rectangleThree}
            />
          </aside>

          <article className="main__col__info lax">
            <h1>
              <span className=" Parallax__content">
                {texts.texts.home.firstSection.sloganFirstName}
              </span>

              <span>{texts.texts.home.firstSection.sloganLastName}</span>
            </h1>
            <section className="col__description">
              <h3>
                <span>{texts.texts.home.firstSection.subSlogan}</span>
                <span>{texts.texts.home.firstSection.subSloganTwo}</span>
              </h3>

              <Link to="/detail-work">
                <button className="button__home" type="submit">
                  {texts.texts.home.firstSection.button}
                </button>
              </Link>
            </section>
          </article>

          <ul className="col__list__items">
            <li className="line__list__item one">
              <a href="https://www.behance.net/FERMIN05" target="__blank">
                <FaBehance />
              </a>
            </li>
            <li className="line__list__item two">
              <FaWhatsapp />
            </li>
          </ul>
        </main>

        <ReactSVG
          src={logo1}
          alt="circle__one"
          className="logo__graphic Parallax__content"
        />
      </section>

      <About />
      <Contact />
    </>
  );
};

export default Home;
