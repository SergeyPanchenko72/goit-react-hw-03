import css from "./App.module.css";
import { useState } from "react";
import initialContacts from "../../startContacts.json";
import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const delContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initialValues} onAdd={addContact} />
      {/* <SearchBox /> */}
      <ContactList contacts={contacts} onDelete={delContact} />
    </div>
  );
}

export default App;