import texts from "../layout/Spaces/data/Spaces.texts.json";

const ItemList = ({ itemData }) => {
  return (
    <>
      {/* type === "general" && */}
      {/* {data.map((dataItem) => (
        <Item key={dataItem.id} itemData={dataItem} />
      ))} */}

      <figure>
        <a href={`/category/${itemData.category}#${itemData.descriptionId}`}>
          <img src={itemData.imgItem} alt={texts.texts.Galery.FigureOne} />
        </a>
      </figure>
    </>
  );
};

export default ItemList;
