import React, { Component, Fragment } from 'react';
import { nanoid } from 'nanoid';
import contacts from 'data/contacts.json';
import Form from 'components/Form';
export default class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  setContact = data => {
    const { name, number } = data;
    const id = nanoid();
    // if (this.state.contacts.find(({ name }) => name === data.name))
    //   return window.alert(`${data.name} is already in contacts.`);
    this.setState(prevState => ({
      contacts: contacts.push({ id, name, number }),
      ...prevState,
    }));
    console.log(this.state);
    console.log(contacts);
  };

  render() {
    return (
      <Fragment>
        <h1>Phonebook</h1>
        <Form onSubmit={this.setContact} />
        <h2>Contacts</h2>
        <ul>{}</ul>
      </Fragment>
    );
  }
}
