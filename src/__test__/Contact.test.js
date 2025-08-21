import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom"

test("should render contact page",()=>{
    render(<Contact/>);

    const load = screen.getByRole("heading");

    expect(load).toBeInTheDocument();

});