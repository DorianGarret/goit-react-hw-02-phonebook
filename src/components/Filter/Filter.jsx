import { Fragment } from 'react';
import { nanoid } from 'nanoid';

export default function Filter({ value, onChange, ...restProps }) {
  const inputSearchId = nanoid();
  return (
    <Fragment>
      <label htmlFor={inputSearchId}>Find contacts by name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        id={inputSearchId}
        onChange={onChange}
      />
    </Fragment>
  );
}
