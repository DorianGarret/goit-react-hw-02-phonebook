export default function ContactList({ getContact }) {
  return (
    <ul>
      {getContact.map(({ id, name, number }) => (
        <li key={id}>
          <p>{`${name}: ${number}`}</p>
        </li>
      ))}
    </ul>
  );
}
