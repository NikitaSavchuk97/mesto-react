import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupImageForm from "./PopupImageForm";
import PopupTypeAvatar from "./PopupTypeAvatar";
import PopupTypeInfo from "./PopupTypeInfo";
import PopupTypeAddCard from "./PopupTypeAddCard";
import PopupTypeConfirm from "./PopupTypeConfirm";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditInfoPopupOpen, setIsEditInfoPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
  console.log(isEditInfoPopupOpen)

  function handleEditAvatarClick () { setIsEditAvatarPopupOpen(true) };
  function handleEditProfileClick () { setIsEditInfoPopupOpen(true) };
  function handleAddCardClick () { setIsAddCardPopupOpen(true) };
  function handleConfirmClick () { setIsConfirmPopupOpen(true) };
  function handleShowIllustrationClick (card) { setSelectedCard(card) };
  function closeThisPopup () {
    setIsEditAvatarPopupOpen(false);
    setIsEditInfoPopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsConfirmPopupOpen(false);
  };

  return (
    <div className="page">

      <Header />

      <Main
        cardClick={handleAddCardClick}
        avatarClick={handleEditAvatarClick}
        profileClick={handleEditProfileClick}
      />

      <Footer />

      <PopupImageForm 
        card={selectedCard}
        close={'close'}
      />

      <PopupTypeAvatar
        open={isEditAvatarPopupOpen}
        close={closeThisPopup}
      />

      <PopupTypeInfo
        open={isEditInfoPopupOpen}
        close={closeThisPopup}
      />

      <PopupTypeAddCard
        open={isAddCardPopupOpen}
        close={closeThisPopup}
      />

      <PopupTypeConfirm
        open={isConfirmPopupOpen}
        close={closeThisPopup}
      />

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
