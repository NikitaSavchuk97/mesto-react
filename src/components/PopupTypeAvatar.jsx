import PopupWithForm from "./PopupWithForm";

function PopupTypeAvatar ({open, close}) {
  return (
    <PopupWithForm title='Обновить аватар' name='type_avatar' open={open} close={close} type='popup__container_type_avatar'>
      <input
        className="popup__name popup__input"
        id="avatar-input"
        type="url" 
        name="avatar"
        placeholder="Ссылка на изображение"
        autoComplete="off"
        minLength="2"
        required
      />
      <span className="popup__input-error avatar-input-error"></span>
      <button type="submit" className="popup__save-button popup__save-button_disabled" disabled>Сохранить</button>
    </PopupWithForm>
  )
}

export default PopupTypeAvatar;