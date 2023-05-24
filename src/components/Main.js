import React from "react";
import api from "../utils/api"


function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    const initialProfile = api.get('/users/me');
    const initialCards = api.get('/cards');

    React.useEffect(() => {
        initialCards
            .then((data) => {
                setCards([...data]);
            })
            .catch((err) => console.log(err));
    }, []);

    React.useEffect(() => {
        initialProfile
            .then((data) => {
                console.log(data)
                setUserName(data.name);
                setUserDescription(data.about)
                setUserAvatar(data.avatar);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <a href="src#" onClick={props.onEditAvatar} className="profile__avatar-link">
                        <img src={userAvatar}
                             alt="Аватар: Жак-Ив Кусто"
                             className="profile__avatar"
                        />
                    </a>
                    <div className="profile__info">
                        <div className="profile__text-container">
                            <h1 className="profile__header">{userName}</h1>
                            <p className="profile__subheader">{userDescription}</p>
                        </div>
                        <button onClick={props.onEditProfile} type="button" className="profile__edit-button" aria-label="Изменить профиль"></button>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button" aria-label="Добавить место"></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {
                        cards.map((item) => (
                            <li className="element" key={item._id}>
                                <a className="element__link-full-image" href="#">
                                    <img src={item.link} alt={item.name} className="element__image" />
                                </a>
                                <div className="element__container">
                                    <h2 className="element__header">{item.name}</h2>
                                    <div className="element__like-container">
                                        <button type="button" className="element__button element__button_type_like"
                                                aria-label="Нравится"></button>
                                        <p className="element__count-likes">{item.likes.length}</p>
                                    </div>
                                </div>
                                <button type="button" className="element__button element__button_type_remove"
                                        aria-label="Удалить"></button>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </main>
    )
}

export default Main;