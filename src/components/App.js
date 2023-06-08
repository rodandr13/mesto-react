import React from 'react';
import api from "../utils/api";
import logo from '../images/header/logo.svg';

import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";

import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.get('/cards')
            .then((data) => {
                setCards(data);
            })
            .catch((err) => console.log(err));
    }, []);

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard({});
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardDelete(card) {
        api.delete(`/cards/${card._id}`)
            .then(() => {
                    setCards((state) => state.filter((c) => c._id !== card._id));
                }
            )
            .catch((err) => {
                console.log(err);
            });
    }

    function handleUpdateUser(user) {
        api.patch('/users/me', user)
            .then((data) => {
                setCurrentUser(data);
            })
            .then(() => closeAllPopups())
            .catch((err) => {
                console.log(err);
            });
    }

    function handleUpdateAvatar(data) {
        api.patch('/users/me/avatar', data)
            .then((data) => {
                setCurrentUser(data);
            })
            .then(() => closeAllPopups())
            .catch((err) => {
                console.error(err);
            })
    }

    function handleAddPlaceSubmit(newCard) {
        api.post('/cards', newCard)
            .then((card) => {
                setCards([card, ...cards]);
            })
            .then(() => closeAllPopups())
            .catch((err) => {
                console.error(err);
            })
    }

    React.useEffect(() => {
        api.get('/users/me')
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <div className="root">
                    <div className="page">
                        <Header logo={logo}/>
                        <Main onEditProfile={handleEditProfileClick}
                              onAddPlace={handleAddPlaceClick}
                              onEditAvatar={handleEditAvatarClick}
                              onCardClick={handleCardClick}
                              onCardLike={handleCardLike}
                              onCardDelete={handleCardDelete}
                              cards={cards}
                        />
                        <Footer/>
                        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
                        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
                        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
                        <PopupWithForm title="Вы уверены?" name="confirm" onClose={closeAllPopups} textButton="Да"/>
                        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
                    </div>
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
