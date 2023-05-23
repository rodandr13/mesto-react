import logo from '../images/header/logo.svg'
import '../index.css'

import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="root">
        <div className="page">
        <Header logo={logo} />
          <Main />
          <Footer />
          <div className="popup popup_type_profile">
            <div className="popup__container">
              <h2 className="popup__header">Редактировать профиль</h2>
              <form action="src#" method="post" name="edit-profile-form"
                    className="form popup__form popup__form_type_edit-profile" noValidate>
                <input
                    type="text"
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
                <button type="submit" className="form__button">Сохранить</button>
              </form>
              <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            </div>
          </div>
          <div className="popup popup_type_add-place">
            <div className="popup__container">
              <h2 className="popup__header">Новое место</h2>
              <form action="src#" method="post" className="form popup__form popup__form_type_add-place"
                    name="add-place-form" noValidate required>
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
                <button type="submit" className="form__button">Создать</button>
              </form>
              <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            </div>
          </div>
          <div className="popup popup_type_image">
            <figure className="popup__image-container">
              <img className="popup__image" src="src#" alt="#" />
              <figcaption className="popup__image-caption">#</figcaption>
              <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            </figure>
          </div>

          <div className="popup popup_type_confirm">
            <div className="popup__container">
              <form className="form popup__form popup__form_type_remove-confirm">
                <h2 className="popup__header">Вы уверены?</h2>
                <button type="submit" className="form__button">Да</button>
                <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
              </form>
            </div>
          </div>

          <div className="popup popup_type_avatar">
            <div className="popup__container">
              <h2 className="popup__header">Обновить аватар</h2>
              <form action="src#" method="post" className="form popup__form popup__form_type_avatar"
                    name="add-place-form" noValidate>
                <input
                    type="url"
                    id="avatar-link"
                    className="form__input form__input_type_avatar-link"
                    name="avatar"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="form__input-error avatar-link-error"></span>
                <button type="submit" className="form__button">Сохранить</button>
              </form>
              <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
