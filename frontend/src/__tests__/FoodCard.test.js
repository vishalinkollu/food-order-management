import { render, screen, fireEvent } from "@testing-library/react";
import FoodCard from "../components/FoodCard";
import { CartContext } from "../context/CartContext";

describe("FoodCard Component", () => {
    const mockItem = {
        id: 1,
        name: "Pizza",
        description:
            "Cheesy Pizza",
        price: 299,
        image: "pizza.jpg",
    };

    test("renders food item correctly", () => {
        render(
            <CartContext.Provider
                value={{
                    addToCart:
                        jest.fn(),
                    cart: [],
                }}
            >
                <FoodCard
                    item={mockItem}
                />
            </CartContext.Provider>
        );

        expect(screen.getByText("Pizza")).toBeInTheDocument();
        expect(screen.getByText("₹299")).toBeInTheDocument();
    }
    );

    test("calls addToCart on click", () => {
        const addToCart =
            jest.fn();

        render(
            <CartContext.Provider
                value={{
                    addToCart,
                    cart: [],
                }}
            >
                <FoodCard
                    item={mockItem}
                />
            </CartContext.Provider>
        );

        fireEvent.click(screen.getByText("Add"));

        expect(addToCart).toHaveBeenCalled();
    }
    );
}
);  