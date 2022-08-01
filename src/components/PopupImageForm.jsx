import PopupWithForm from "./PopupWithForm";

function PopupImageForm ({card, close}) {
  return (
    <div className="popup popup_type_illustration">
      <div className="popup__illustration">
        <button type="button" className="popup__close"></button>
        <img className="popup__image" src="#" alt="#" />
        <p className="popup__subtitle"></p>
      </div>
    </div>

  )
}

export default PopupImageForm;