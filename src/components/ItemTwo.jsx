import texts from "../layout/Spaces/data/Spaces.texts.json";

const ItemTwo = ({ linkData }) => {
  return (
    <>
      {/* si no existe category */}
      {!linkData.category ? (
        <figure>
          <a href={`#${linkData.descriptionId}`}>
            <img src={linkData.imgGen} alt={texts.texts.Design.imagenDesign} />
          </a>
        </figure>
      ) : (
        <figure>
          <a href={`/category/${linkData.category}#${linkData.modalId}`}>
            {/* antes como descriptionId */}
            <img
              src={linkData.imgDesign}
              alt={texts.texts.Design.imagenDesign}
            />
          </a>
        </figure>
      )}
      {/* funcionaría esta segunda opción */}

      {/* si existe cambia a href */}
    </>
  );
};

export default ItemTwo;
