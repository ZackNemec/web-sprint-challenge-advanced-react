import React from "react";
import { fireEvent, screen, getByText, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const header = getByText(/Checkout Form/);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const success = screen.getByText(/You have ordered some plants! Woo-hoo!/i);
  expext(success).toBeInTheDocument();
});
