import PopupWithForm from "./PopupWithForm";

function PopupTypeInfo ({open, close}) {
  return (
    <PopupWithForm title='Редактировать профиль' name='type_info' open={open} close={close} type=''>
      <input
        className="popup__name popup__input"
        id="name-input"
        type="text"
        name="name"
        placeholder="Ваше имя"
        autoComplete="off"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error name-input-error"></span>

      <input
        className="popup__about popup__input"
        id="about-input"
        type="text"
        name="job"
        placeholder="О себе"
        autoComplete="off"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error about-input-error"></span>

      <button type="submit" className="popup__save-button popup__save-button_disabled" disabled>Сохранить</button>
    </PopupWithForm>
  )
}

export default PopupTypeInfo;