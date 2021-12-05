import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { List, ListItem, Button } from './ContactList.styled';

export default function ContactList({ getContact, onDeleteContact }) {
  return (
    <List>
      {getContact.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>{`${name}: ${number}`}</p>
          <Button onClick={() => onDeleteContact(id)}>
            <MdDeleteForever style={{ marginRight: 10 }} />
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  getContact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
