function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.title}`}>
            <div className="popup__container">
                <h2 className="popup__header">{props.title}</h2>
                <form action="src#" method="post" name={`${props.name}-form`}
                      className={`form popup__form popup__form_type_${props.name}`} noValidate>
                    {props.children}
                    <button type="submit" className="form__button">Сохранить</button>
                </form>
                <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            </div>
        </div>
    )
}

export default PopupWithForm;