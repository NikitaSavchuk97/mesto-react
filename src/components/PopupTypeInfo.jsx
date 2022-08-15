import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function PopupTypeInfo({ open, close, onUpdateUser }) {

	const [name, setName] = useState('awdawdawdwa')
	const [description, setDescription] = useState('')
	const currentUser = useContext(CurrentUserContext);

	useEffect(() => {
		setName(currentUser.name)
		setDescription(currentUser.about)
	}, [currentUser]);

	function handleSubmit(evt) {
		evt.preventDefault()
		onUpdateUser({
			name,
			about: description,
		})
		close()
	}

	function handleNameChange(evt) {
		setName(evt.target.value)
	}

	function handleDescriptionChange(evt) {
		setDescription(evt.target.value)
	}

	return (
		<PopupWithForm title='Редактировать профиль' submit={handleSubmit} name='type_info' open={open} close={close} type='' text={'Сохранить'}>
			<input
				value={name}
				onChange={handleNameChange}
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
				value={description}
				onChange={handleDescriptionChange}
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
		</PopupWithForm>
	)
}

export default PopupTypeInfo;