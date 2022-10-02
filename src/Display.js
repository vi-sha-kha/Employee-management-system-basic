
import React, { useEffect, useState }from "react";
import "./App.css";
import { uuid } from "uuidv4";
import Header from "./components/header";
import AddContact from "./components/addContact";
import ContactList from "./components/contactList"
// import ContactCard from "./components/contactCard"

function Display() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts] = useState([]);


  // const contacts=[
  //   {
  //     id:"1",
  //     name:"Vishakha",
  //     email:"vish@gmail.com",
  //   },
  //   {
  //     id:"2",
  //     name:"Rajad",
  //     email:"rj@gmail.com",
  //   },

  // ];

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
 
  };
  
  // useEffect(() => {
  //   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retrieveContacts) setContacts(retrieveContacts);
  // }, []);

  useEffect(() => {
    const retrieveContacts = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if(retrieveContacts!==null) setContacts(JSON.parse(retrieveContacts));
  }, []);



  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      {/* <ContactCard /> */}
    </div>
  );
}

export default Display;