import "./DetailGalery.css";
import first__image from "../../../assets/image/first__image__galery.webp";
import second__image from "../../../assets/image/second__image__galery.webp";
import three__image from "../../../assets/image/three__image__galery.webp";
import rectangle__galery from "../../../assets/image/RectangleDetailGalery.svg";
import close__modal from "../../../assets/icons/closeModal.svg";
import arrow__left__modal from "../../../assets/icons/arrowLeftModal.svg";
import arrow__right__modal from "../../../assets/icons/arrowRightModal.svg";
import frick__galery from "../../../assets/icons/flickrDetail.svg";
import { ReactSVG } from "react-svg";
import texts from "../data/Spaces.texts.json";
import circle__six from "../../../assets/image/Circle-6.svg";
import { FaBehance } from "react-icons/fa";
import { getCategoriesTwo, getData } from "../../../utils/firebaseConfig";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../../../components/ItemList";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";

//Queremos ver si podemos tener un DetailDesign así

const DetailGalery = () => {
  const { categoryid } = useParams();
  const [categoriesTwo, setCategoriesTwo] = useState();
  const [items, setItems] = useState([]);

  const navLinkStyles = ({ isActive }) => {
    return {
      transition: isActive ? "background-color 0.1s" : "none",
      color: isActive ? "#ffffff" : "#019eff",
      backgroundColor: isActive ? "#019eff" : "white",
    };
  };

  useEffect(() => {
    if (categoryid) {
      getData("category", "==", categoryid)
        .then((res) => setItems(res))
        .catch((err) => console.error(err));
    }
  }, [categoryid]);

  useEffect(() => {
    getCategoriesTwo()
      .then((categoriesTwo) => {
        setCategoriesTwo(categoriesTwo);
        console.log(categoriesTwo);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <section className="detail__galery sectionChangeStart">
        <aside className="galery__text__top">
          <h1>{texts.texts.Galery.title}</h1>
          <small>{texts.texts.Galery.descriptionFirst}</small>
          <small>
            fotografía <strong>del tipo documental.</strong>He trabajado en
            <strong> recitales, obras de teatro</strong> y de más.
          </small>
        </aside>

        <section className="galery__types__fotography">
          <header className="galery__types__fotography sectionChange">
            <aside>
              <div className="radio">
                {categoriesTwo?.map((category) => (
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
        </section>

        <main className="galery__photography__container">
          <ReactSVG
            src={rectangle__galery}
            alt={texts.texts.GraphicRectangle}
            className="rectangle__galery"
          />

          {categoryid ? (
            items.map((item) => <ItemList key={item.id} itemData={item} />)
          ) : (
            <>
              <figure>
                <a href="#trabajo-1">
                  <img src={first__image} alt={texts.texts.Galery.FigureOne} />
                </a>
              </figure>

              <figure>
                <a href="#trabajo-2">
                  <img src={second__image} alt={texts.texts.Galery.FigureTwo} />
                </a>
              </figure>

              <figure className="figure__img__three">
                <a href="#trabajo-3">
                  <img
                    src={three__image}
                    alt={texts.texts.Galery.FigureThree}
                  />
                </a>
              </figure>

              <figure>
                <a href="#trabajo-4">
                  <img src={first__image} alt={texts.texts.Galery.FigureOne} />
                </a>
              </figure>

              <figure>
                <a href="#trabajo-5">
                  <img src={second__image} alt={texts.texts.Galery.FigureTwo} />
                </a>
              </figure>
            </>
          )}
        </main>

        {items.map((item) => (
          <Modal key={item.id} itemData={item} />
        ))}

        <article className="modal__container" id="trabajo-1">
          <main className="modal__content">
            <a href="#cerrar" className="modal__close">
              <img src={close__modal} alt={texts.texts.Galery.closeModal} />
            </a>

            <a href="#trabajo-5" className="arrow__left__modal">
              <img
                src={arrow__left__modal}
                alt={texts.texts.Galery.arrowLeftModal}
              />
            </a>
            <a href="#trabajo-2" className="modal__close arrow__right__modal">
              <img
                src={arrow__right__modal}
                alt={texts.texts.Galery.arrowRightModal}
              />
            </a>
            <img
              src={first__image}
              alt="Imagen sobre la que se hizo click vista en Modal 1"
            />
          </main>
        </article>

        <article className="modal__container" id="trabajo-2">
          <main className="modal__content">
            <a href="#cerrar" className="modal__close">
              <img src={close__modal} alt={texts.texts.Galery.closeModal} />
            </a>

            <a href="#trabajo-1" className="arrow__left__modal">
              <img
                src={arrow__left__modal}
                alt={texts.texts.Galery.arrowLeftModal}
              />
            </a>
            <a href="#trabajo-3" className="modal__close arrow__right__modal">
              <img
                src={arrow__right__modal}
                alt={texts.texts.Galery.arrowRightModal}
              />
            </a>

            <img
              src={second__image}
              alt="Imagen sobre la que se hizo click vista en Modal 2"
            />
          </main>
        </article>

        <article className="modal__container" id="trabajo-3">
          <main className="modal__content">
            <a href="#cerrar" className="modal__close">
              <img src={close__modal} alt={texts.texts.Galery.closeModal} />
            </a>

            <a href="#trabajo-2" className="arrow__left__modal">
              <img
                src={arrow__left__modal}
                alt={texts.texts.Galery.arrowLeftModal}
              />
            </a>
            <a href="#trabajo-4" className="modal__close arrow__right__modal">
              <img
                src={arrow__right__modal}
                alt={texts.texts.Galery.arrowRightModal}
              />
            </a>

            <img
              className="modal__img__three"
              src={three__image}
              alt="Imagen sobre la que se hizo click vista en Modal 3"
            />
          </main>
        </article>

        <article className="modal__container" id="trabajo-4">
          <main className="modal__content">
            <a href="#cerrar" className="modal__close">
              <img src={close__modal} alt={texts.texts.Galery.closeModal} />
            </a>

            <a href="#trabajo-3" className="arrow__left__modal">
              <img
                src={arrow__left__modal}
                alt={texts.texts.Galery.arrowLeftModal}
              />
            </a>
            <a href="#trabajo-5" className="modal__close arrow__right__modal">
              <img
                src={arrow__right__modal}
                alt={texts.texts.Galery.arrowRightModal}
              />
            </a>

            <img
              src={first__image}
              alt="Imagen sobre la que se hizo click vista en Modal 4"
            />
          </main>
        </article>

        <article className="modal__container" id="trabajo-5">
          <main className="modal__content">
            <a href="#cerrar" className="modal__close">
              <img src={close__modal} alt={texts.texts.Galery.closeModal} />
            </a>

            <a href="#trabajo-4" className="arrow__left__modal">
              <img
                src={arrow__left__modal}
                alt={texts.texts.Galery.arrowLeftModal}
              />
            </a>
            <a href="#trabajo-1" className="modal__close arrow__right__modal">
              <img
                src={arrow__right__modal}
                alt={texts.texts.Galery.arrowRightModal}
              />
            </a>

            <img
              src={second__image}
              alt="Imagen sobre la que se hizo click vista en Modal 5"
            />
          </main>
        </article>

        <footer>
          <aside className="galery__footer__invitation sectionChange">
            <h3 className="letter-spacing">
              {texts.texts.Galery.invitationTitle}
            </h3>

            <article className="galery__icons__items">
              <li>
                <a href="https://www.behance.net/FERMIN05" target="__blank">
                  <FaBehance
                    className="galery__behance__icon pointer"
                    alt={texts.texts.Galery.behance}
                  />
                </a>
              </li>

              <li>
                <ReactSVG
                  src={frick__galery}
                  className="galery__flick__icon pointer"
                  alt={texts.texts.Galery.flickr}
                />
              </li>
            </article>
          </aside>

          <ReactSVG
            src={circle__six}
            alt={texts.texts.GraphicAltDetail}
            className="circle__six"
          />
        </footer>
      </section>
    </>
  );
};

export default DetailGalery;
