import css from './App.module.css';

function ContactsList({ contacts, deleteContacts }) {
  const renderContact = contacts.map(({ id, name, number }) => (
    <li className={css.item} key={id}>
      {name} : {number}
      <button
        className={css.listBtn}
        type="button"
        onClick={deleteContacts}
        id={id}
      >
        X
      </button>
    </li>
  ));

  return <ul className={css.list}>{renderContact}</ul>;
}

export default ContactsList;
