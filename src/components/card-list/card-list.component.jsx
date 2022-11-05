import { Component } from "react";

class CardList extends Component {


  render(){
    console.log("render from CardList")
    const {monsters} = this.props
    return (<div>
      {monsters.map(monster => {
          return (
            <div key={monster.id}>
              <h2>{monster.name}</h2>
            </div>
          );
        })}
      </div>)
  }
}

export default CardList;