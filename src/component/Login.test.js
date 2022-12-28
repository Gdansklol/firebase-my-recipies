import {render, screen} from "@testing-library/react";
import Login from "./Login";

const user = {
    name : "Prairi",
    pw: 1234567,
}

test("Hello Prairi user, Happy New Year 2023!",() => {
    render(<Login user={user} />);
    const loginEl = screen.getByText(/Hello/i);
    expect(loginEl).toBeInTheDocument();
});