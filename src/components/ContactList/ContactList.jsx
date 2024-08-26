import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
