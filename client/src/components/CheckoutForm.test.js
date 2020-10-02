import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  // Arrange
  render(<CheckoutForm />);

  // Act
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const button = screen.getByRole("button", { name: /checkout/i });

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "Trevor" },
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "Beadle" },
  });
  fireEvent.change(addressInput, {
    target: { name: "address", value: "123 Main St" },
  });
  fireEvent.change(cityInput, {
    target: { name: "city", value: "Springdale" },
  });
  fireEvent.change(stateInput, {
    target: { name: "state", value: "Arkansas" },
  });
  fireEvent.change(zipInput, { target: { name: "zip", value: "72764" } });
  fireEvent.click(button);

  // Assert
  const successMessage = screen.findByText(
    "You have ordered some plants! Woo-hoo!"
  );
  expect(successMessage).toBeTruthy();
});
