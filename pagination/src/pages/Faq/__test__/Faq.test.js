import { render, screen } from '@testing-library/react';
import Faq from "../Faq";

it("Faq react component testing", async () => {
    render(<Faq title={"something"}/>);
    const headingElement = screen.getByRole("heading", {name: "something"})
    expect(headingElement).toBeInTheDocument();
});