import PopupWithForm from "./PopupWithForm";

function PopupTypeAvatar ({open, close}) {
  return (
    <PopupWithForm title='Обновить аватар' name='type_avatar' open={open} close={close} type='popup__container_type_avatar' text={'Сохранить'}>
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
    </PopupWithForm>
  )
}

export default PopupTypeAvatar;