import { Component } from "react";
import "./card-list.styles.css"
import Card from "../card/card.component"


class CardList extends Component {


  render(){
    const {monsters} = this.props
    const monsterList = monsters.map(monster => (
          <Card monster={monster} key={monster.id}/>));
    
    return (<div className="card-list">
      {monsterList}
      </div>)
  }
}

export default CardList;