import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({cardClick, avatarClick, profileClick, illustrationClick}) {

	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([])

	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getCards()])
			.then(([user, cards]) => {
				setUserDescription(user.about);
				setUserAvatar(user.avatar);
				setUserName(user.name);
				setCards(cards);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__blanket">
					<img className="profile__avatar" src={userAvatar} alt="Фото пользователя"></img>
					<button type="button" onClick={avatarClick} className="profile__edit-btn"></button>
				</div>

				<div className="profile-info">
					<h1 className="profile-info__name">{userName}</h1>
					<button type="button" onClick={profileClick} className="profile-info__edit-button"></button>
					<p className="profile-info__title">{userDescription}</p>
				</div>
				<button type="button" onClick={cardClick} className="add-button"></button>
			</section>

			<section className="elements">
				{
					cards.map((card) => (
						<Card card={card} illustrationClick={illustrationClick} key={card._id}/>
					))
				}
			</section>
		</main >
	);
}

export default Main;