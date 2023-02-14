// i removed the global state of everything as weMre goign to work with cookies
// left this in case we want to implement dark mode or something that requires global state

import React, { useState, createContext, useContext } from "react"; // context to storage the user data (global satatus) and make it available in all pages of the website

export const SessionContext = createContext(); // to use context and have global status

const UserProvider = (props) => {
  // state of authorization
  const [userAuthorized, setUserAuthorized] = useState(false);

  const logInAuth = () => {
    setUserAuthorized(true);
  };
  const logOutAuth = () => {
    setUserAuthorized(false);
  };
  // BELOW previous experiment ********************

  // this state will carry the info entered by the user when logging in
  //with this we can fetch the right profile to display in Profile page
  const [userGlobal, setUserGlobal] = useState({});

  // this will be the changing state function
  const logIn = (
    enteredEmail,
    enteredPassword,
    enteredAddress,
    enteredFirst_name,
    entered_id,
    enteredLast_name,
    enteredPhone,
    enteredRole
  ) => {
    setUserGlobal({
      email: enteredEmail,
      password: enteredPassword,
      address: enteredAddress,
      first_name: enteredFirst_name,
      id: entered_id,
      last_name: enteredLast_name,
      phone: enteredPhone,
      role: enteredRole,
    });
  };
  const logOut = () => {
    setUserGlobal({});
  };

  return (
    <SessionContext.Provider value={{ userAuthorized, logIn, logOut }}>
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

/**Steps to implement global state on another page
 * 1. paste on top
 * import { useContext } from "react"; // global sate
 * import { SessionContext } from "../context/userGlobalContext"; //global state
 * 2. paste in the middle
 *   const { userGlobal, logIn, logOut } = useContext(SessionContext);
 *  now you can use userGlobal.email, logIn() and logOut()
 */
