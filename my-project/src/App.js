import Sign_in from './components/Sign_in';
import Sign_up from './components/Sign_up';
import DefaultScreen from "../src/DefaultScreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react";
import fire from './fire';


const App = () => {
  // const [user, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [hasAccount, setHasAccount] = useState(false);

  // const clearInputs = () => {
  //   setEmail('');
  //   setPassword('');
  // }

  // const clearErrors = () => {
  //   setEmailError('');
  //   setPasswordError('');
  // }

  // const handleLogin = () => {
  //   clearErrors();
  //   fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch(err => {
  //       switch(err.code){
  //         case "auth/invalid-email":
  //         case "auth/user-disabled":
  //         case "auth/user-not-found":
  //           setEmailError(err.messge);
  //           break;
  //         case "auth/wrong-password":
  //           setPasswordError(err.message);
  //           break;
  //     }
  //   });
  // };

  // const handleSignup = () => {
  //   clearErrors();
  //   fire
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch(err => {
  //       switch(err.code){
  //         case "auth/email-already-in-use":
  //         case "auth/invalid-email":
  //           setEmailError(err.messge);
  //           break;
  //         case "auth/weak-password":
  //           setPasswordError(err.message);
  //           break;
  //     }
  //   });
  // };

  // const headleLogout = () => {
  //   fire.auth().signOut();
  // };

  // const authListener = () => {
  //   fire.auth().onAuthStateChanged(user => {
  //     if(user){
  //       clearInputs();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   authListener();
  // }, []);

  return (
    <>
      {/* <h1 className="text-4xl text-center"> testando </h1> */}

      <Router>
        <Routes>
          <Route path='/' element={<DefaultScreen />} />
          <Route path='/sign_in' element={<Sign_in 
            // email={email} 
            // setEmail={setEmail} 
            // password={password}
            // setPassword={setPassword}
            // handleLogin={handleLogin}
            // handleSignup={handleSignup}
            // hasAccount={hasAccount}
            // setHasAccount={setHasAccount}
            // emailError={emailError}
            // passwordError={passwordError}
            />} />
          <Route path='/sign_up' element={<Sign_up />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
