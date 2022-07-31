import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

  const [isPopupTypeInfo, setIsPopupTypeInfo] = useState(false);

  function handleEditProfileClick() { 
    console.log(isPopupTypeInfo)
    console.log('МММ-ХУЕТА')
    setIsPopupTypeInfo(true);
    console.log(isPopupTypeInfo)
  }

  const popupTypeInfo = document.querySelector('popup_type_info')
  console.log(popupTypeInfo);

  return (
    <div className="page">

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
      />

      <Footer />

      <div className="popup popup_type_info">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>

          <h2 className="popup__title">Редактировать профиль</h2>

          <form className="popup__form" name="profile-form" method="post" noValidate>

            <input className="popup__name popup__input" id="name-input" type="text" name="name" placeholder="Ваше имя"
              autoComplete="off" minLength="2" maxLength="40" required />
            <span className="popup__input-error name-input-error"></span>

            <input className="popup__about popup__input" id="about-input" type="text" name="job" placeholder="О себе"
              autoComplete="off" minLength="2" maxLength="200" required />
            <span className="popup__input-error about-input-error"></span>

            <button type="submit" className="popup__save-button popup__save-button_disabled" disabled>Сохранить</button>

          </form>
        </div>
      </div>


      <div className="popup popup_type_photo">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>

          <h2 className="popup__title">Новое место</h2>

          <form className="popup__form" name="card-form" method="post" noValidate>

            <input className="popup__name popup__input" id="spot-input" type="text" name="name" placeholder="Название"
              autoComplete="off" minLength="2" required />
            <span className="popup__input-error spot-input-error"></span>

            <input className="popup__about popup__input" id="url-input" type="url" name="link"
              placeholder="Ссылка на картинку" autoComplete="off" minLength="2" required />
            <span className="popup__input-error url-input-error"></span>

            <button type="submit" className="popup__save-button popup__save-button_disabled" disabled>Создать</button>

          </form>
        </div>
      </div>

      <div className="popup popup_type_illustration">
        <div className="popup__illustration">
          <button type="button" className="popup__close"></button>
          <img className="popup__image" src="#" alt="#" />
          <p className="popup__subtitle"></p>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container popup__container_type_avatar">
          <button type="button" className="popup__close"></button>

          <h2 className="popup__title">Обновить аватар</h2>

          <form className="popup__form" name="avatar-form" method="post" noValidate>

            <input className="popup__name popup__input" id="avatar-input" type="url" name="avatar"
              placeholder="Ссылка на изображение" autoComplete="off" minLength="2" required />
            <span className="popup__input-error avatar-input-error"></span>

            <button type="submit" className="popup__save-button popup__save-button_disabled" disabled>Сохранить</button>
          </form>

        </div>
      </div>

      <div className="popup popup_type_delete">
        <div className="popup__container popup__container_type_delete">
          <button type="button" className="popup__close"></button>

          <form className="popup__form" name="delete-form" method="post" noValidate>

            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__save-button">Удалить</button>

          </form>
        </div>
      </div>

      <template className="template-item">
        <article className="element">
          <img className="element__photo" src="#" alt="#" />
          <h2 className="element__title">zwd</h2>
          <button type="button" className="element__like"></button>
          <p className="element__counter">0</p>
          <button type="button" className="element__delete"></button>

        </article>
      </template>

    </div>
  );
}

export default App;
