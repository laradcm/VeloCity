import React, { useState, createContext, useContext } from "react"; // context to storage the user data (global satatus) and make it available in all pages of the website

export const SessionContext = createContext(); // to use context and have global status

const UserProvider = (props) => {
  // this state will carry the info entered by the user when logging in
  //with this we can fetch the right profile to display in Profile page
  const [userGlobal, setUserGlobal] = useState({
    email: "not logged in yet, this should be empty",
    password: "not logged in yet, this should be empty",
  });

  // this will be the changing state function
  const logIn = (enteredEmail, enteredPassword) => {
    setUserGlobal({ email: enteredEmail, password: enteredPassword });
  };
  const logOut = () => {
    setUserGlobal({});
  };

  return (
    <SessionContext.Provider value={{ userGlobal, logIn, logOut }}>
      {props.children}
    </SessionContext.Provider>
  );
};

// usually people create a central "context creator expression" to avoid creating context
// in each page you need access to the global state
// BUT THE CODE ABOVE WAS WORKING PERFECTLY
// this breaks my code idk why
// export const userSessionInfo = () => {
//   useContext(SessionContext);
// };

export default UserProvider;
