function PopupWithForm({ name, open, close, title, child }) {
	return (
		<div className="popup popup_type_info">
			<div className="popup__container">

				<button type="button" className="popup__close"></button>
				<h2 className="popup__title">Редактировать профиль</h2>
				<form className="popup__form" name="profile-form" method="post" noValidate>

				</form>

			</div>
		</div>
	)
}

export default PopupWithForm;