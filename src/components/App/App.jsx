import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from 'data/contacts.json';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container, Phonebook, Contacts, Empty } from './App.styled';

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

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
      filter: '',
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const { setContact, changeFilter, getContact } = this;
    const visibleContact = getContact();

    return (
      <Container>
        <Phonebook>Phonebook</Phonebook>
        <Form onSubmit={setContact} />
        <Contacts>Contacts</Contacts>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length ? (
          <ContactList
            getContact={visibleContact}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <Empty>Phonebook is Empty</Empty>
        )}
      </Container>
    );
  }
}
