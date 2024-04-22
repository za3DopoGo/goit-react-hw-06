import css from "./Contact.module.css";
const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>👤 {contact.name}</p>
        <p>☎️ {contact.number}</p>
      </div>
      <button onClick={() => onDeleteContact(contact.id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
