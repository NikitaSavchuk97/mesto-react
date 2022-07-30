function Main({ onEditProfile }) {

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__blanket">
					<img className="profile__avatar" src="#" alt="Фото пользователя"></img>
					<button type="button" className="profile__edit-btn"></button>
				</div>

				<div className="profile-info">
					<h1 className="profile-info__name">Елена Полякова</h1>
					<button type="button" onClick={onEditProfile} className="profile-info__edit-button"></button>
					<p className="profile-info__title">Любитель корги</p>
				</div>
				<button type="button" className="add-button"></button>
			</section>

			<section className="elements">

			</section>
		</main >
	);
}

export default Main;