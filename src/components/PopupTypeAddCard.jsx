import PopupWithForm from "./PopupWithForm";

function PopupTypeAddCard ({open, close}) {
  return (
    <PopupWithForm title='Новое место' name='type_photo' open={open} close={close} type='' text={'Добавить'}>
      <input
        className="popup__name popup__input"
        id="spot-input"
        type="text"
        name="name"
        placeholder="Название"
        autoComplete="off"
        minLength="2"
        required
      />
      <span className="popup__input-error spot-input-error"></span>

      <input
        className="popup__about popup__input"
        id="url-input"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        autoComplete="off"
        minLength="2"
        required
      />
      <span className="popup__input-error url-input-error"></span>
    </PopupWithForm>
  )
}

export default PopupTypeAddCard;