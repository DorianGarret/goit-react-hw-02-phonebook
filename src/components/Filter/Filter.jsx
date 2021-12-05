import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterContainer, Label } from './Filter.styled';

export default function Filter({ value, onChange }) {
  const inputSearchId = nanoid();
  return (
    <FilterContainer>
      <Label htmlFor={inputSearchId}>Find contacts by name</Label>
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
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
