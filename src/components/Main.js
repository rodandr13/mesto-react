function Main(props) {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <a href="src#" className="profile__avatar-link">
                        <img src="<%=require('./images/profile/avatar.jpg')%>"
                             alt="Аватар: Жак-Ив Кусто"
                             className="profile__avatar"
                        />
                    </a>
                    <div className="profile__info">
                        <div className="profile__text-container">
                            <h1 className="profile__header">Жак-Ив Кусто</h1>
                            <p className="profile__subheader">Исследователь океана</p>
                        </div>
                        <button type="button" className="profile__edit-button" aria-label="Изменить профиль"></button>
                    </div>
                </div>
                <button type="button" className="profile__add-button" aria-label="Добавить место"></button>
            </section>
            <section className="elements">
                <ul className="elements__list">

                </ul>
            </section>
        </main>
    )
}

export default Main;