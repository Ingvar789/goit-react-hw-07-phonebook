import { ContactListStyled } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectStatusFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);

  const dispatch = useDispatch();

  const normaliseFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normaliseFilter)
  );

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactListStyled>
      {console.log(contacts)}
      {filteredContacts.map(({ name, phone, id }) => {
        return (
          <li key={id}>
            <p>
              {name}: {phone}
            </p>
            <button
              type="button"
              className="ContactList__btn"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;
