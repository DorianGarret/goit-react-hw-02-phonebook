import { MdDeleteForever } from 'react-icons/md';
import { List, ListItem, Button } from './ContactList.styled';

export default function ContactList({ getContact, onDeleteContact }) {
  return (
    <List>
      {getContact.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>{`${name}: ${number}`}</p>
          <Button onClick={() => onDeleteContact(id)}>
            <MdDeleteForever />
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
