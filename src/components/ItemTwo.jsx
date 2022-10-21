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
          <a href={`/category/${linkData.category}#${linkData.descriptionId}`}>
            <img src={linkData.imgGen} alt={texts.texts.Design.imagenDesign} />
          </a>
        </figure>
      )}

      {/* si existe cambia a href */}
    </>
  );
};

export default ItemTwo;
