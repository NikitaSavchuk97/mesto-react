import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card({ card, illustrationClick }) {

	const currentUser = useContext(CurrentUserContext);

	const isOwn = card.owner._id === currentUser._id;
	const cardDeleteButtonClassName = (
		isOwn ?
			'element__delete'
			:
			'element__delete_hidden'
	);

	function handleClick() {
		illustrationClick(card)
	}

	return (
		<article className="element">
			<img className="element__photo" src={card.link} alt={card.name} onClick={handleClick} />
			<h2 className="element__title">{card.name}</h2>
			<button type="button" className="element__like"></button>
			<p className="element__counter">{card.likes.length}</p>
			<button type="button" className={cardDeleteButtonClassName}></button>
		</article>
	)
}

export default Card;