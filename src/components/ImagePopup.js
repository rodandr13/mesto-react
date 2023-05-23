function ImagePopup(props) {
    return (
        <div className="popup popup_type_image">
            <figure className="popup__image-container">
                <img className="popup__image" src="src#" alt="#"/>
                <figcaption className="popup__image-caption">#</figcaption>
                <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            </figure>
        </div>
    )
}

export default ImagePopup;