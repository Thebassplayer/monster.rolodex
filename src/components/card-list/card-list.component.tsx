import { Monster } from "../../App";

import "./card-list.styles.css";
import Card from "../card/card.component";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  const monsterList = monsters.map(monster => (
    <Card monster={monster} key={monster.id} />
  ));

  return <div className="card-list">{monsterList}</div>;
};

export default CardList;
