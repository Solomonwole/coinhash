// import React, { useState, useEffect} from 'react';
// import { auth } from '../firebase/FirebaseConfig'

//  const AuthContext = React.createContext()

//  const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         auth.onAuthStateChanged(setCurrentUser)
//     }, []);

//     return(
//         <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>
//     )
// }

