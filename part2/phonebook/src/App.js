import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterSearch, setFilterSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

  const fetchState = () => {
    axios.get("http://localhost:3001/persons").then(({data}) => {
        setPersons(data);
        setFilteredPersons(data);
    })
  }

  useEffect(fetchState, []);

  const handleFilter = (event) => {
      const input = event.target.value.toLowerCase();
    setFilterSearch(input);
    const filtered = input ? persons.filter(({name}) => name.toLowerCase().startsWith(input)) : persons;
    setFilteredPersons(filtered);
  }

  const handleInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.find(({name}) => name.toLowerCase() === newName.toLowerCase())) {
        alert(`${newName} is already added to phonebook`);
        return;
    }
    const newPersons = [...persons, { name: newName, number: newPhone }];
    const newFilteredPersons = filterSearch ? newPersons.filter(({name}) => name.toLowerCase().startsWith(filterSearch)) : newPersons;
    setPersons(newPersons);
    setFilteredPersons(newFilteredPersons);
    setNewPhone("");
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter  filterSearch={filterSearch} handleFilter={handleFilter} />

      <h3>Add a new</h3>
      <PersonForm
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        newName={newName}
        newPhone={newPhone}
        handleNumber={handleNumber}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons}/>
    </div>
  );
};

export default App;
