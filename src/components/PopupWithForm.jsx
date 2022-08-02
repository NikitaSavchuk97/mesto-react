function PopupWithForm({ name, open, close, title, children, type, text}) {
	console.log('NAME ; ',name)
	console.log('OPEN ; ',open)
	console.log('CLOSE ; ',close)
	console.log('TITLE ; ',title)
	console.log('CHILDREN ; ',children)
	console.log('TYPE ; ',type)

	return (
		<div className={`popup popup_${name} ${open ? 'popup_active' : ''}`}>
			<div className={`popup__container ${type}`}>

				<button type="button" onClick={close} className="popup__close"></button>
				<h2 className="popup__title">{title}</h2>
				<form className="popup__form" name={`${name}-form`} method="post" noValidate>
					{
						children
					}
				</form>
				<button type="submit" className="popup__save-button popup__save-button_disabled" disabled>{text}</button>
			</div>
		</div>
	)
}

export default PopupWithForm;