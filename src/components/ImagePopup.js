function ImagePopup(props) {
    return (
        <div className={`popup popup_type_image ${props.card.name ? 'popup_opened' : ''}`}>
            <figure className="popup__image-container">
                <img className="popup__image" src={props.card.link} alt={props.card.name}/>
                <figcaption className="popup__image-caption">{props.card.name}</figcaption>
                <button onClick={props.onClose}
                        type="button"
                        className="popup__close-button"
                        aria-label="Закрыть">
                </button>
            </figure>
        </div>
    )
}

export default ImagePopup;