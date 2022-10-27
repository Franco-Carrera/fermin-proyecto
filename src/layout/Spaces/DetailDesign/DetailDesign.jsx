import "./DetailDesign.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategories } from "../../../utils/firebaseConfig";
import { getLinks } from "../../../utils/firebaseConfig";
import { ReactSVG } from "react-svg";

import first__image from "../../../assets/image/design__image__one.jpg";
import second__image from "../../../assets/image/design__image__two.jpg";
import three__image from "../../../assets/image/design__image__three.jpg";
import four__image from "../../../assets/image/design__image__four.jpg";
import five__image from "../../../assets/image/design__image__five.jpg";

import { NavLink } from "react-router-dom";
import texts from "../data/Spaces.texts.json";
import ItemListTwo from "../../../components/ItemListTwo";
import rectangle__galery from "../../../assets/image/RectangleDetailGalery.svg";
import ModalDesign from "../ModalDesign/ModalDesign";

const Design = () => {
  const [categories, setCategories] = useState();
  const [links, setLinks] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid) {
      getLinks("category", "==", categoryid)
        .then((res) => setLinks(res))
        .catch((err) => console.error(err));
    }
  }, [categoryid]);

  const navLinkStyles = ({ isActive }) => {
    return {
      transition: isActive ? "background-color 0.1s" : "none",
      color: isActive ? "#ffffff" : "#019eff",
      backgroundColor: isActive ? "#019eff" : "white",
    };
  };

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories);
        console.log(categories);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <aside className="galery__text__top">
        <h1>{texts.texts.Design.titleDesign}</h1>

        <aside className="line-height">
          <small>{texts.texts.Design.allParrafo}</small>
        </aside>
      </aside>

      <header className="galery__photodesign__types sectionChange">
        <aside>
          <div className="radio">
            {categories?.map((category) => (
              <NavLink
                key={category.id}
                to={`/category/${category.id}`}
                className="NavLinkWork"
                style={navLinkStyles}
              >
                <input
                  className="radio__input"
                  type="radio"
                  value="option1"
                  name="myRadio"
                  id={category.labelFor}
                />
                <label className="pointer" htmlFor={category.labelFor}>
                  {category.description}
                </label>
              </NavLink>
            ))}
          </div>
        </aside>
      </header>

      <main className="galery__photodesign__container sectionChange">
        <ReactSVG
          src={rectangle__galery}
          alt={texts.texts.GraphicRectangle}
          className="rectangle__galery"
        />
        {categoryid ? (
          links.map((link) => <ItemListTwo key={link.id} linkData={link} />)
        ) : (
          <>
            <figure>
              <a href="#trabajo-design-1">
                <img src={first__image} alt={texts.texts.Galery.FigureOne} />
              </a>
            </figure>

            <figure>
              <a href="#trabajo-design-2">
                <img
                  src={second__image}
                  alt={texts.texts.Galery.FigureTwo}
                  style={{ height: "400px" }}
                />
              </a>
            </figure>

            <figure className="figure__img__three">
              <a href="#trabajo-design-3">
                <img
                  src={three__image}
                  alt={texts.texts.Galery.FigureThree}
                  style={{ height: "600px" }}
                />
              </a>
            </figure>

            <figure>
              <a href="#trabajo-design-4">
                <img
                  // className="img__four__galery"
                  src={four__image}
                  alt="{texts.texts.Design.FigureFour}"
                  style={{ height: "430px" }}
                />
              </a>
            </figure>

            <figure>
              <a href="#trabajo-design-5">
                <img
                  src={five__image}
                  alt="{texts.texts.Galery.FigureFive}"
                  style={{ height: "430px" }}
                />
              </a>
            </figure>
          </>
        )}
      </main>

      {links.map((link) => (
        <ModalDesign key={link.id} linkData={link} />
      ))}
    </>
  );
};

export default Design;
