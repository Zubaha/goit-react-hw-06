import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Contact({ contact, deleteContact }) {
  const handleDeleteClick = () => {
    deleteContact(contact.id);
  };
  return (
    <li className={css.wrapper}>
      <div className={css.wrapperUser}>
        <p>
          <FaUser className={css.name} />
          {contact.name}
        </p>
        <p>
          <FaPhoneAlt className={css.number} />
          {contact.number}
        </p>
      </div>
      <button className={css.button} onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
