import "./card-list.styles.css"
import Card from "../card/card.component"

const CardList = ({monsters}) => {
  const monsterList = monsters.map(monster => (
        <Card monster={monster} key={monster.id}/>));
  
  return (<div className="card-list">
    {monsterList}
    </div>)

}


export default CardList;