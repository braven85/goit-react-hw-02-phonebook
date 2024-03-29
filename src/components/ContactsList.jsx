import { Contact } from './Contact';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <ul>
      <Contact contacts={contacts} removeContact={removeContact} />
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
};
