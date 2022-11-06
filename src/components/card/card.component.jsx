import { Component } from "react";
import "./card.styles.css"

class Card extends Component {
render(){
  const {id, name, email} = this.props.monster
  const imgUrl = `https://robohash.org/${id}?set=set2&180x180`;
        return (<div className="card-container">
              <img src={imgUrl} alt={`monster ${name}`} />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>)
}
}

export default Card;