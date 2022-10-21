import close__modal from "../../../assets/icons/closeModal.svg";
import arrow__left__modal from "../../../assets/icons/arrowLeftModal.svg";

const ModalDesign = ({ linkData }) => {
  return (
    <>
      <article className="modal__container" id={`${linkData.descriptionId}`}>
        <main className="modal__content">
          <a href="#cerrar" className="modal__close">
            <img src={close__modal} alt="modalClose" />
          </a>

          <a href={`${linkData.itemPrevId} `} className="arrow__left__modal">
            <img src={arrow__left__modal} alt="arrowLeftModal" />
          </a>

          <img
            // className=""
            style={{ height: "450px" }}
            src={linkData.imgGen}
            alt="Imagen sobre la que se hizo click vista en Modal 1"
          />
        </main>
      </article>
    </>
  );
};

export default ModalDesign;
