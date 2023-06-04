import React from "react";
import Card from "./Card";
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Main({onAddPlace, onEditProfile, onEditAvatar, onCardClick, onCardLike, cards}) {

    const {name, about, avatar} = React.useContext(CurrentUserContext);

    function handleAvatarClick(e) {
        e.preventDefault();
        onEditAvatar();
    }


    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <a href="#" onClick={handleAvatarClick} className="profile__avatar-link">
                        <img src={avatar}
                             alt={`Аватар: ${name}`}
                             className="profile__avatar"
                        />
                    </a>
                    <div className="profile__info">
                        <div className="profile__text-container">
                            <h1 className="profile__header">{name}</h1>
                            <p className="profile__subheader">{about}</p>
                        </div>
                        <button onClick={onEditProfile}
                                type="button"
                                className="profile__edit-button"
                                aria-label="Изменить профиль">
                        </button>
                    </div>
                </div>
                <button onClick={onAddPlace}
                        type="button"
                        className="profile__add-button"
                        aria-label="Добавить место">
                </button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {
                        cards.map((card) => (
                            <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike}/>
                            )
                        )
                    }
                </ul>
            </section>
        </main>
    )
}

export default Main;