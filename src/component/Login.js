export default function Login({user}) {
    return user.name ? <h1>Hello! {user.name}</h1>:<button>Login</button>
}


// import React from 'react';


// const Hello = () => {
//   return (
//     <div>
//         <h1>Hello !</h1>
//     </div>
//   )
// }

// export default Hello




// import {render, screen} from "@testing-library/react";
// import Hello from "./Hello";

// const user = {
//     name : "Prairi",
//     pw: 1234567,
// }

// test("Dese it contain the words Hello?",() => {
//     render(<Hello user={user}/>);
//     const loginEl = screen.getByText(/Hello/i);
//     expect(loginEl).toBeInTheDocument();
// });


// import {render, screen} from "@testing-library/react";
// import Hello from "../components/Hello";
// import { BrowserRouter } from 'react-router-dom';
// // import {Login} from '../Login';

// const user = {
//     name : "Prairi",
//     pw: 1234567,
// }

// test("Does it contain the words Login?",() => {
//     render(<Hello user={user} />);
//     <BrowserRouter>
//     <Hello />
//     </BrowserRouter>
//     const loginEl = screen.getByText(/Login/i);
//     expect(loginEl).toBeInTheDocument();
// });