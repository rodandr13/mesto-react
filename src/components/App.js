import React from 'react';

import logo from '../images/header/logo.svg'

import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

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

    return (
        <div className="App">
            <div className="root">
                <div className="page">
                    <Header logo={logo}/>
                    <Main onEditProfile={handleEditProfileClick}
                          onAddPlace={handleAddPlaceClick}
                          onEditAvatar={handleEditAvatarClick}
                          onCardClick={handleCardClick}/>
                    <Footer/>
                    <PopupWithForm title="Редактировать профиль"
                                   name="edit-profile"
                                   isOpen={isEditProfilePopupOpen}
                                   onClose={closeAllPopups}
                                   textButton="Сохранить">
                        <input type="text"
                               id="profile-name"
                               className="form__input form__input_type_name"
                               name="name"
                               placeholder="Имя"
                               minLength="2"
                               maxLength="40"
                               required
                        />
                        <span className="form__input-error profile-name-error"></span>
                        <input
                            type="text"
                            id="profile-job"
                            className="form__input form__input_type_job"
                            name="about"
                            placeholder="Деятельность"
                            minLength="2"
                            maxLength="200"
                            required
                        />
                        <span className="form__input-error profile-job-error"></span>
                    </PopupWithForm>
                    <PopupWithForm title="Новое место"
                                   name="add-place"
                                   isOpen={isAddPlacePopupOpen}
                                   onClose={closeAllPopups}
                                   textButton="Создать">
                        <input
                            type="text"
                            id="image-name"
                            className="form__input form__input_type_image-name"
                            name="name"
                            placeholder="Название"
                            minLength="2"
                            maxLength="30"
                            required
                        />
                        <span className="form__input-error image-name-error"></span>
                        <input
                            type="url"
                            id="image-link"
                            className="form__input form__input_type_image-link"
                            name="link"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span className="form__input-error image-link-error"></span>
                    </PopupWithForm>
                    <PopupWithForm title="Обновить аватар"
                                   name="avatar"
                                   isOpen={isEditAvatarPopupOpen}
                                   onClose={closeAllPopups}
                                   textButton="Сохранить">
                        <input
                            type="url"
                            id="avatar-link"
                            className="form__input form__input_type_avatar-link"
                            name="avatar"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span className="form__input-error avatar-link-error"></span>
                    </PopupWithForm>
                    <PopupWithForm title="Вы уверены?" name="confirm" onClose={closeAllPopups} textButton="Да" />
                    <ImagePopup card={selectedCard} onClose={closeAllPopups} />

                </div>
            </div>
        </div>
    );
}

export default App;
