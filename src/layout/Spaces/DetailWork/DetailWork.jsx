import "./DetailWork.css";
import arrowLeftWork from "../../../assets/image/arrowLeftWork.svg";
import one from "../../../assets/image/01.svg";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import texts from "../data/Spaces.texts.json";
import circle__four from "../../../assets/image/Circle-4.svg";
import detail01 from "../../../assets/image/detail01.svg";
import detail02 from "../../../assets/image/detail02.svg";
import detail03 from "../../../assets/image/detail03.svg";

const DetailWork = () => {
  return (
    <>
      <main className="mainDetail sectionChangeStart">
        <Link to="/" style={{ cursor: "auto" }}>
          <ReactSVG src={arrowLeftWork} className="arrowLeftWork pointer" />
        </Link>

        <section>
          <aside className="detail__work__01__and__text">
            <img
              src={one}
              className="first"
              alt={texts.texts.Cards.graphic01}
            />
            <h1>{texts.texts.Cards.title}</h1>
          </aside>

          <main className="detail__row__work">
            <article className="detail__card">
              <aside className="detail__card__top">
                <ReactSVG
                  src={detail01}
                  alt={texts.texts.Cards.graphic01Card}
                />
                <h2>{texts.texts.Cards.subtitleFirst}</h2>
              </aside>

              <p>{texts.texts.Cards.cardOne}</p>
            </article>

            <article className="detail__card">
              <aside className="detail__card__top">
                <ReactSVG
                  src={detail02}
                  alt={texts.texts.Cards.graphic02Card}
                />
                <h2>{texts.texts.Cards.subtitleSecond}</h2>
              </aside>
              <p>{texts.texts.Cards.cardTwo}</p>
            </article>

            <article className="detail__card">
              <aside className="detail__card__top">
                <ReactSVG
                  src={detail03}
                  alt={texts.texts.Cards.graphic03Card}
                />
                <h2>{texts.texts.Cards.subtitleThree}</h2>
              </aside>
              <p>{texts.texts.Cards.cardThree}</p>
            </article>
          </main>
          <ReactSVG
            src={circle__four}
            className="circle__four"
            alt={texts.texts.GraphicAltDetail}
          />
        </section>
      </main>
    </>
  );
};

export default DetailWork;
