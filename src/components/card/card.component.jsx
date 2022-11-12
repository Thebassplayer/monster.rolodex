import "./card.styles.css"

const Card = ({monster}) => {
  const {id, name, email} = monster
  const imgUrl = `https://robohash.org/${id}?set=set2&180x180`;
  return (<div className="card-container">
            <img src={imgUrl} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>)
}
export default Card;
