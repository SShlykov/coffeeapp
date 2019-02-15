import React from "react";
import App from "./app";
import  {shallow} from "enzyme";

describe("Testing <App />", () => {
    const coffeeApp = shallow(<App />);
    describe("Testing snap and state", () => {
        it("App gave rendered correctly", () => {
            expect(coffeeApp).toMatchSnapshot();
        });
        it("App state 'error' is true", () => {
            expect(coffeeApp.state().error).toBeFalsy();
        });
        it("App state 'term' is empty string", () => {
            expect(coffeeApp.state().filter).toBe("");
        });
        it("App state 'filter' is empty string", () => {
            expect(coffeeApp.state().filter).toBe("");
        });

    })
    describe("Testing handlers", () => {
        it("Testing onSearchChange", () => {
            coffeeApp.instance().onSearchChange("hello");
            expect(coffeeApp.state().term).toBe("hello");
        })
        it("Testing onFilterChange", () => {
            coffeeApp.instance().onFilterChange("world");
            expect(coffeeApp.state().filter).toBe("world");
        })
    })
});