function Card(props) {
    function handleClick(e) {
        e.preventDefault();
        props.onCardClick(props.card);
    }

    return (
        <li className="element">
            <a onClick={handleClick} className="element__link-full-image" href="#">
                <img src={props.card.link} alt={props.card.name} className="element__image"/>
            </a>
            <div className="element__container">
                <h2 className="element__header">{props.card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className="element__button element__button_type_like"
                            aria-label="Нравится"></button>
                    <p className="element__count-likes">{props.card.likes.length}</p>
                </div>
            </div>
            <button type="button" className="element__button element__button_type_remove"
                    aria-label="Удалить"></button>
        </li>
    )
}

export default Card;