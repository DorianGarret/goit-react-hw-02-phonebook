import React, { Component, Fragment } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from 'data/contacts.json';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  setContact = data => {
    const { contacts } = this.state;
    const normalizedName = data.name.toLowerCase();

    const isContact = contacts.find(contact => {
      return contact.name.toLowerCase().includes(normalizedName);
    });

    if (isContact) {
      return alert(`${data.name} is already in contacts`);
    }

    const contact = { id: nanoid(), ...data };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  checkContact = contacts => {};

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };
  render() {
    const { filter } = this.state;
    const { setContact, changeFilter, getContact } = this;

    return (
      <Fragment>
        <h1>Phonebook</h1>
        <Form onSubmit={setContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList getContact={getContact()} />
      </Fragment>
    );
  }
}
