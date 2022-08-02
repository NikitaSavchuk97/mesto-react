import { useState } from "react";

import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupTypeInfo from "./PopupTypeInfo";
import PopupTypeAvatar from "./PopupTypeAvatar";
import PopupTypeAddCard from "./PopupTypeAddCard";
import PopupTypeConfirm from "./PopupTypeConfirm";


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditInfoPopupOpen, setIsEditInfoPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name:'', link:''});

  function handleShowIllustrationClick (card) { setSelectedCard(card) };
  function handleEditAvatarClick () { setIsEditAvatarPopupOpen(true) };
  function handleEditProfileClick () { setIsEditInfoPopupOpen(true) };
  function handleAddCardClick () { setIsAddCardPopupOpen(true) };
  function handleConfirmClick () { setIsConfirmPopupOpen(true) };

  function closeThisPopup () {
    setIsEditAvatarPopupOpen(false);
    setIsEditInfoPopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="page">

      <Header />

      <Main
        cardClick={handleAddCardClick}
        avatarClick={handleEditAvatarClick}
        profileClick={handleEditProfileClick}
        illustrationClick={handleShowIllustrationClick}
      />

      <Footer />

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

      <ImagePopup
        card={selectedCard}
        close={closeThisPopup}
      />

    </div>
  );
}

export default App;
