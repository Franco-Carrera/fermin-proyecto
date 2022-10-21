import "./DetailAbout.css";
import { Link } from "react-router-dom";
import { DetailContextWrapper } from "../../../utils/DetailContext";
import arrowLeftAbout from "../../../assets/image/arrowLeftAbout.svg";
import two from "../../../assets/icons/02about.svg";
import circle__seven from "../../../assets/image/Circle-7.svg";
import circle__eight from "../../../assets/image/Circle-8.svg";
import Ellipse from "../../../assets/icons/Ellipse2.svg";
import Ellipse2 from "../../../assets/icons/Ellipse3.svg";
import Ellipse3 from "../../../assets/icons/Ellipse4.svg";

const DetailAbout = () => {
  return (
    <>
      <DetailContextWrapper>
        <div className="containerAbout sectionChangeStart">
          <Link to={`/`}>
            <img
              src={arrowLeftAbout}
              alt="volver a Home"
              className="backToHome"
            />
          </Link>
          <img src={circle__seven} alt="group" className="group" />
          {/* <a href="https://proy-ferm.netlify.app/"> */}

          {/* es necesario ese enlace de ahref, para producción. Este es el paso. Pero antes*/}

          {/* </a> */}
          <div className="aboutHeader">
            <div className="aboutTitle">
              <img src={two} alt="02" />
              <h1>Sobre mí</h1>
            </div>
            <div>
              <p className="about__detail__p">
                Soy un <strong>apasionado del diseño</strong>, me encanta todo
                lo que es capaz de comunicar en todos sus sentidos. A diario me
                dedico a <strong>enriquecer mis conocimientos.</strong> <br />
                <br />A lo largo de mi experiencia como freelance he realizado
                piezas que van desde lo editorial hasta la gráfica para eventos
                como{" "}
                <strong>
                  flyers, banners, diseños para estampados, identidad visual
                </strong>
                , etc.
                <br />
                <br />
                Dentro de esta área lo que más me llama la atención y que más me
                incentiva es el diseño de <strong>
                  identidad de marca.
                </strong>{" "}
                Es algo que siempre me resulta un desafío ya que es la pieza
                fundamental de la cual nace la{" "}
                <strong>imagen de un proyecto.</strong>
              </p>
            </div>
          </div>
        </div>

        <section className="detailAbout__two sectionChange">
          <img src={circle__eight} alt="group" className="group2" />
          <div className="education">
            <h1>Educación</h1>
            <div className="education__col__container">
              <div>
                <img src={Ellipse} alt="blue" />
                <p>
                  Diseñador en comunicación social, Facultad de Bellas Artes,
                  UNLP.
                </p>
              </div>
              <div>
                <img src={Ellipse2} alt="magenta" />
                <p>Community manager, Coderhouse.</p>
              </div>
              <div>
                <img src={Ellipse3} alt="magenta" />
                <p>Fotografía, ESPACIO NOVA.</p>
              </div>
            </div>
          </div>
        </section>
      </DetailContextWrapper>
    </>
  );
};

export default DetailAbout;
