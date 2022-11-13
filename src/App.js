import { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-bow.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("Rendered!");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setMonsters(users);
      };

      fetchData();
    } catch (error) {
      throw new Error("The error is: ", error);
    }
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

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
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
