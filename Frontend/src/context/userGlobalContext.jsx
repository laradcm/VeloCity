// i removed the global state of everything as weMre goign to work with cookies
// left this in case we want to implement dark mode or something that requires global state

import React, { useState, createContext, useContext } from "react"; // context to storage the user data (global satatus) and make it available in all pages of the website

export const SessionContext = createContext(); // to use context and have global status

const UserProvider = (props) => {
  // this state will carry the info entered by the user when logging in
  //with this we can fetch the right profile to display in Profile page
  const [userGlobal, setUserGlobal] = useState({});

  // this will be the changing state function
  const logIn = (object) => {
    setUserGlobal(object);
  };

  const logOut = () => {
    setUserGlobal({});
  };

  const addToGlobalState = (param1, param2) => {
    setUserGlobal({ ...userGlobal, neighbourhood: param1, station: param2 });
  };

  return (
    // <SessionContext.Provider value={{ userAuthorized, logInAuth, logOutAuth }}>
    <SessionContext.Provider
      value={{ userGlobal, logIn, logOut, addToGlobalState }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};

export default UserProvider;

/**Steps to implement global state on another page
 * 1. paste on top
 * import { useContext } from "react"; // global sate
 * import { SessionContext } from "../context/userGlobalContext"; //global state
 * 2. paste in the middle
 *   const { userGlobal, logIn, logOut } = useContext(SessionContext);
 *  now you can use userGlobal.email, logIn() and logOut()
 */
