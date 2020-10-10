import React from "react";
import App from "./App";
import { mount, ReactWrapper } from "enzyme"

let component: ReactWrapper;

describe("App", () => {

  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterEach((): void => {
    component.unmount();
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("renders banner", () => {
    const testTitle = "Test Title";
    process.env.REACT_APP_TITLE = testTitle;
    process.env.REACT_APP_CONTEXT = "react-playpen-test";
    component = mount(
      <App />
    );
    expect(component.find(".Banner").exists()).toBeTruthy();
    expect(component.find(".Banner .title").text()).toBe(testTitle);
    expect(component.find(".Banner .title").text()).toBe(testTitle);
    expect(component.find(".Banner .nav a").length).toBe(4);
    expect(component.find(".Banner .nav a").at(0).text()).toBe("Home");
    expect(component.find(".Banner .nav a").at(1).text()).toBe("About");
    expect(component.find(".Banner .nav a").at(2).text()).toBe("Github");
    // Overflow nav ("hamburger") follows
    expect(component.find(".Banner .nav a").at(3).text()).toBe("");
    expect(component.find(".Banner .nav a").at(3).type()).toBe("a");
  });

  it("renders home page by default", () => {
    component = mount(
      <App />
    );
    expect(component.find(".Home").exists()).toBeTruthy();
    expect(component.find(".About").exists()).toBeFalsy();
    // TODO - click the About link
  });
});
