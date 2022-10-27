import close__modal from "../../../assets/icons/closeModal.svg";
import arrow__left__modal from "../../../assets/icons/arrowLeftModal.svg";
import arrow__right__modal from "../../../assets/icons/arrowRightModal.svg";

const Modal = ({ itemData }) => {
  return (
    <article className="modal__container" id={`${itemData.modalId}`}>
      <main className="modal__content">
        <a href="#cerrar" className="modal__close">
          <img src={close__modal} alt="modalClose" />
        </a>

        <a href={`${itemData.modalPrevId} `} className="arrow__left__modal">
          <img src={arrow__left__modal} alt="arrowLeftModal" />
        </a>

        <a
          href={`${itemData.modalLaterId}`}
          className="modal__close arrow__right__modal"
        >
          <img src={arrow__right__modal} alt="arrowRightModal" />
        </a>

        <img
          className="modal__dinamic__image"
          // style={{ height: "450px" }}
          src={itemData.imgPhoto}
          alt="Imagen sobre la que se hizo click vista en Modal 1"
        />
      </main>
    </article>
  );
};

export default Modal;
