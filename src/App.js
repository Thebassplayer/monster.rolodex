import { useState } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-bow.component";

const App = () => {
  console.log("%c render", "color: red");
  const [searchField, setSearchField] = useState("");
  console.log(searchField);

  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box-monster"
        placeholder="search monsters..."
        onChangeHandler={onSearchChange}
      />
      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users =>
//         this.setState(() => {
//           return {
//             monsters: users,
//           };
//         })
//       );
//   }

//   onSearchChange = e => {
//     const searchField = e.target.value.toLowerCase();

//     this.setState(() => {
//       return {
//         searchField,
//       };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange: onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster =>
//       monster.name.toLowerCase().includes(searchField)
//     );
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="search-box-monster"
//           placeholder="search monsters..."
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
