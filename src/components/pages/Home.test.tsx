import React from "react";
import Home from "./Home";
import { mount, ReactWrapper } from "enzyme"

let component: ReactWrapper;

describe("Home", () => {

  afterEach((): void => {
    component.unmount();
  });

  it("renders 3 tiles", () => {
    component = mount(
      <Home />
    );
    // TODO
  });
});
