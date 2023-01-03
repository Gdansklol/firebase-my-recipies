import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import "./App.css";

// // eslint-disable-next-line no-unused-vars
// import firebase from "./Fireb aseConfig";

function App() {
  const [user, setUser]= useState(null);
  FirebaseAuthService.subscribeToAuthChanges(setUser)

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Welcome to Blucrowns Recipies</h1>
      </div>
    </div>
  );
}


export default App;








