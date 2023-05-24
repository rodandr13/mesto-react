import React from "react";
import api from "../utils/api"


function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    const initialProfile = api.get('/users/me');

    React.useEffect(() => {
        initialProfile
            .then((data) => {
                console.log(data)
                setUserName(data.name);
                setUserDescription(data.about)
                setUserAvatar(data.avatar);
            })
            .catch((err) => console.log(err));
    });

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

                </ul>
            </section>
        </main>
    )
}

export default Main;