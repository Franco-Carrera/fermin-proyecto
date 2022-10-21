//import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
//import { getLinks } from "../utils/firebaseConfig";

//import { ReactSVG } from "react-svg";
import { DetailContextWrapper } from "../utils/DetailContext";
import DetailWork from "../layout/Spaces/DetailWork/DetailWork";
import DetailEvents from "../layout/Spaces/DetailEvents/DetailEvents";
import DetailHabilities from "../layout/Spaces/DetailHabilities/DetailHabilities";
import DetailGalery from "../layout/Spaces/DetailGalery/DetailGalery";

import DetailDesign from "../layout/Spaces/DetailDesign/DetailDesign";
//import ItemListTwo from "./ItemListTwo";
//import rectangle__galery from "../assets/image/RectangleDetailGalery.svg";
//podemos traer un RectangleDetailGalery.svg, que sea más largo
//import texts from "../layout/Spaces/data/Spaces.texts.json";

const ItemDetailContainer = () => {
  //const [links, setLinks] = useState([]);
  //  const { categoryid } = useParams();

  /*
  useEffect(() => {
    getLinks("category", "==", categoryid)
      .then((res) => setLinks(res))
      .catch((err) => console.error(err));
  }, [categoryid]);
*/

  return (
    <>
      <DetailContextWrapper>
        <DetailWork />
        <DetailEvents />
        <DetailHabilities />

        <DetailDesign />

        {/* <main className="galery__photography__container galery__desing__container sectionChange">
          <ReactSVG
            src={rectangle__galery}
            alt={texts.texts.GraphicRectangle}
            className="rectangle__galery"
          />
          {links.map((link) => (
            <ItemListTwo key={link.id} linkData={link} />
          ))}
        </main> */}

        <DetailGalery />
      </DetailContextWrapper>
    </>
  );
};

export default ItemDetailContainer;
