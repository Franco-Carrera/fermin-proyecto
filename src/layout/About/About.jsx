import "./About.css";
import circleTwo from "../../assets/image/Circle-2.svg";
import two from "../../assets/image/02.svg";
import { ReactSVG } from "react-svg";
import texts from "../../layout/sectionsText/Home.texts.json";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="about sectionChange sectionChangeAnimation"
      >
        <article>
          <aside className="about__col__circle__and__img">
            <ReactSVG
              src={circleTwo}
              className="circle__two"
              alt={texts.texts.home.graphicAlt}
            />

            <aside className="about__col__02__and__text">
              <section className="about__col__02">
                <ReactSVG
                  src={two}
                  className="__02"
                  alt={texts.texts.home.secondSection.graphic02}
                />
                <h1 className="about__col__text__title">
                  {texts.texts.home.secondSection.titleAbout}
                </h1>
              </section>

              <section className="about__contain">
                <p>{texts.texts.home.secondSection.descriptionAbout}</p>
                <aside className="text-center contain__button__home">
                  <Link to={`/detail-about`}>
                    <button className="button__home button__home--work__about text-align">
                      Ver más
                    </button>
                  </Link>
                </aside>
              </section>
            </aside>
          </aside>
        </article>
      </section>
    </>
  );
};

export default About;
