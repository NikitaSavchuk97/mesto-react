function Card ({card, illustrationClick}) {

  function handleClick () { illustrationClick(card) }

  return (
    <article className="element">
      <img className="element__photo" src={card.link} alt={card.name} onClick={handleClick}/>
      <h2 className="element__title">{card.name}</h2>
      <button type="button" className="element__like"></button>
      <p className="element__counter">{card.likes.length}</p>
      <button type="button" className="element__delete"></button>
    </article>
  )
}

export default Card;