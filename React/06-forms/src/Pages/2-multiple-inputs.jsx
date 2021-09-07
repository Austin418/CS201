import React, { useState, useRef } from "react";
const MultiInputs{}
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [people, setPeople] = useState([]);
const input1 = useRef(null)
const handleSubmit = (e) => {
  e.preventDefault();
  if(firstName || lastName){
    const person = {firstName, lastName, email}
    setPeople((people) =>{
      return{...people,person}
    })
    setFirstName("")
    setLastName("")
    setEmail("")
  }
  else{
    input1.current.plackholder = "Please Enter a first name"
  }
};

function App() {
  return (
    <>
      <article>
        <form action="" className="form">
          <div className="form-control">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              ref={input1}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add person</button>
        </form>
        {people.map((person) => {
          const{id, firstName, lastName, email} = person;
          return(
            <div key={index}>
              <h4>{firstName ? firstName : 'redardboy"'}{lastName ? lastName : "retardson"}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  );
}

export default App;