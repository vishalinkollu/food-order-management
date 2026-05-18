import { render, screen, fireEvent} from "@testing-library/react";
import Checkout from "../pages/Checkout";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../context/CartContext";

describe( "Checkout Validation", () => {
    test(
      "shows validation errors",
      async () => {
        render(
          <BrowserRouter>
            <CartContext.Provider
              value={{
                cart: [],
                totalPrice: 0,
                clearCart:
                  jest.fn(),
              }}
            >
              <Checkout />
            </CartContext.Provider>
          </BrowserRouter>
        );

        fireEvent.click(
          screen.getByText(
            /place order/i
          )
        );

        expect(
          await screen.findByText(
            /name is required/i
          )
        ).toBeInTheDocument();

        expect(
          await screen.findByText(
            /address is required/i
          )
        ).toBeInTheDocument();
      }
    );
  }
);