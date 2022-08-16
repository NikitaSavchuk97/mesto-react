import { useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import api from "../utils/Api";
import ImagePopup from "./ImagePopup";
import PopupTypeInfo from "./PopupTypeInfo";
import PopupTypeAvatar from "./PopupTypeAvatar";
import PopupTypeAddCard from "./PopupTypeAddCard";
import PopupTypeConfirm from "./PopupTypeConfirm";


function App() {

	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
	const [isEditInfoPopupOpen, setIsEditInfoPopupOpen] = useState(false);
	const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
	const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		Promise.all([api.getUserInfo()])
			.then(([user]) => {
				setCurrentUser(user)
			})
			.catch((err) => console.log(err));
	}, []);

	function handleShowIllustrationClick(card) { setSelectedCard(card) };
	function handleEditAvatarClick() { setIsEditAvatarPopupOpen(true) };
	function handleEditProfileClick() { setIsEditInfoPopupOpen(true) };
	function handleAddCardClick() { setIsAddCardPopupOpen(true) };
	function handleConfirmClick() { setIsConfirmPopupOpen(true) };

	function closeThisPopup() {
		setIsEditAvatarPopupOpen(false);
		setIsEditInfoPopupOpen(false);
		setIsAddCardPopupOpen(false);
		setIsConfirmPopupOpen(false);
		setSelectedCard({});
	};

	function handleUpdateUser(data) {
		api.setUserInfo(data)
			.then((res) => {
				setCurrentUser(res)
			})
	}

	function handleUpdateAvatar(data) {
		api.setAvatar(data)
			.then((res) => {
				
		})
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
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
					onUpdateUser={handleUpdateUser}
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
		</CurrentUserContext.Provider>
	);
}

export default App;
