import { mount } from "@vue/test-utils";

import ActionButton from "@/components/Buttons/ActionButton";

describe("Is the button rendered with props", () => {
  it("renders button with props", () => {
    const wrapper = mount(ActionButton, {
      props: {
        variant: "primary",
        text: "click me",
      },
    });
    expect(wrapper.text()).toMatch("click me");
  });
});
