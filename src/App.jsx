import './App.css';
import React from 'react';

import { nanoid } from 'nanoid';
import { Repository } from './components/Repository';
import HorizontalLine from './components/HorizontalLine';
import PropTypes from 'prop-types';

import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import { Filter } from './components/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = { id: nanoid(), name, number };
    contacts.some(el => el.name === name)
      ? alert(`${name} is already on the contacts list`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  filterContacts = e => {
    const value = e.target.value.toLowerCase();
    this.setState({ filter: value });
  };

  removeContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const getContacts = this.getContacts();
    return (
      <div className="App">
        <Repository />
        <HorizontalLine />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <HorizontalLine />
        <h1>Contacts</h1>
        <Filter filter={this.filterContacts} />
        <ContactsList
          contacts={getContacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
