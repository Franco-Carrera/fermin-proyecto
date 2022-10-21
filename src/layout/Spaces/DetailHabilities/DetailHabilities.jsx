import "./DetailHabilities.css";
import { ReactSVG } from "react-svg";
import texts from "../data/Spaces.texts.json";
import circleTwo from "../../../assets/image/Circle-2.svg";
import adobe__photo from "../../../assets/icons/adobePhDetail.svg";
import adobe__illu from "../../../assets/icons/adobeIlluDetail.svg";
import corel__Draw from "../../../assets/icons/corelDraw.svg";
import adobe__design from "../../../assets/icons/adobeIndeDetail.svg";
import adobe__lightroom from "../../../assets/icons/adobeLigDetail.svg";
import sony__vegas from "../../../assets/icons/sonyvegasDetail.svg";
import canva from "../../../assets/icons/canvaDetail.svg";

const DetailHabilities = () => {
  return (
    <>
      <main className="main__habilities sectionChangeStart">
        <ReactSVG
          src={circleTwo}
          className="circle__five"
          alt={texts.texts.GraphicAltDetail}
        />

        <section className="article__skills__habilities">
          <h1>Habilidades</h1>

          <article className="list__skills__habilities">
            <aside className="item__list__skill">
              <ReactSVG
                src={adobe__photo}
                alt={texts.texts.Habilities.skillOne}
              />
              <span>{texts.texts.Habilities.skillOne}</span>
            </aside>

            <aside className="item__list__skill">
              <ReactSVG
                src={adobe__illu}
                alt={texts.texts.Habilities.skillTwo}
              />
              <span>{texts.texts.Habilities.skillTwo}</span>
            </aside>

            <aside className="item__list__skill">
              <ReactSVG
                src={corel__Draw}
                alt={texts.texts.Habilities.skillThree}
              />
              <span>{texts.texts.Habilities.skillThree}</span>
            </aside>

            <aside className="item__list__skill">
              <ReactSVG
                src={adobe__design}
                alt={texts.texts.Habilities.skillFour}
              />
              <span>{texts.texts.Habilities.skillFour}</span>
            </aside>

            <aside className="item__list__skill">
              <ReactSVG
                src={adobe__lightroom}
                alt={texts.texts.Habilities.skillFive}
              />
              <span>{texts.texts.Habilities.skillFive}</span>
            </aside>

            <aside className="item__list__skill">
              <ReactSVG
                src={sony__vegas}
                alt={texts.texts.Habilities.skillSix}
              />
              <span>{texts.texts.Habilities.skillSix}</span>
            </aside>

            <aside className="item__list__skill">
              <ReactSVG src={canva} alt={texts.texts.Habilities.skillSeven} />
              <span>{texts.texts.Habilities.skillSeven}</span>
            </aside>
          </article>
        </section>
      </main>
    </>
  );
};

export default DetailHabilities;
