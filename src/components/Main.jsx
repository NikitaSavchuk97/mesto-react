import { useEffect, useState, useContext } from "react";
import api from "../utils/Api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ cardClick, avatarClick, profileClick, illustrationClick }) {

	const currentUser = useContext(CurrentUserContext);
	const [cards, setCards] = useState([])

	useEffect(() => {
		Promise.all([api.getCards()])
			.then(([cards]) => {
				setCards(cards);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__blanket">
					<img className="profile__avatar" src={currentUser.avatar} alt="Фото пользователя"></img>
					<button type="button" onClick={avatarClick} className="profile__edit-btn"></button>
				</div>

				<div className="profile-info">
					<h1 className="profile-info__name">{currentUser.name}</h1>
					<button type="button" onClick={profileClick} className="profile-info__edit-button"></button>
					<p className="profile-info__title">{currentUser.about}</p>
				</div>
				<button type="button" onClick={cardClick} className="add-button"></button>
			</section>

			<section className="elements">
				{
					cards.map((card) => (
						<Card card={card} illustrationClick={illustrationClick} key={card._id} />
					)
					)
				}
			</section>
		</main >
	);
}

export default Main;