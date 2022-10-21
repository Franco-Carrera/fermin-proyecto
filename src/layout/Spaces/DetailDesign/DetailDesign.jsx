import "./DetailDesign.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategories } from "../../../utils/firebaseConfig";
import { getLinks } from "../../../utils/firebaseConfig";
import { ReactSVG } from "react-svg";

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
    getLinks("category", "==", categoryid)
      .then((res) => setLinks(res))
      .catch((err) => console.error(err));
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
      <aside className="main__top__info sectionChange galery__text__top">
        <h1>{texts.texts.Design.titleDesign}</h1>

        <aside className="line-height">
          <small>{texts.texts.Design.allParrafo}</small>
        </aside>
      </aside>

      <header className="galery__types__fotography sectionChange">
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

      <main className="galery__photography__container galery__desing__container sectionChange">
        <ReactSVG
          src={rectangle__galery}
          alt={texts.texts.GraphicRectangle}
          className="rectangle__galery"
        />
        {links.map((link) => (
          <ItemListTwo key={link.id} linkData={link} />
        ))}
      </main>

      {links.map((link) => (
        <ModalDesign key={link.id} linkData={link} />
      ))}
    </>
  );
};

export default Design;
