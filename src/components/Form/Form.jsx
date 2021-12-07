import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormContainer, Label, Input, Button, Icon } from './Form.styled';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetState();
  };
  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.nameId}
          value={name}
          onChange={this.handleChange}
        />

        <Label htmlFor={this.numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.numberId}
          value={number}
          onChange={this.handleChange}
        />

        <Button type="submit">
          <Icon />
          Add contact
        </Button>
      </FormContainer>
    );
  }
}
