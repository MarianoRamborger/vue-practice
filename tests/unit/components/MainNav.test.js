import { mount } from "@vue/test-utils"; //? A library that allows you to mount a
//? vue component outside the browser for testing

import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("Renders company name", async () => {
    const wrapper = mount(MainNav); //? mount and cache the mounted component
    await wrapper.setProps({ company: "prop test" }); //? async prop injection
    expect(wrapper.text()).toMatch("prop test");
  });
});

//? The following test, however, may know a bit too much about the implementation for
//? some people's tastes. I don't share such view, but it's worth pointing
// describe("MainNav mount+", () => {
//   it("showcases second argument to mount, used to inject data to the component", () => {
//     const wrapper = mount(MainNav, {
//       props: {
//         company: {
//           default: `Another way to feed props or data`,
//         },

//       },
//       data(){ return {}}
//     });
//     expect(wrapper.text()).toMatch("Another way to feed props or data");
//   });
// });

describe("MainNav inj data async", () => {
  it("injecting data asynchronically to the test", async () => {
    const wrapper = mount(MainNav);
    wrapper.setData({ company: "ssss" });
    expect(wrapper.text()).toMatch("Vue Careers");
  });

  it("displays menu items for navigation", () => {
    //? This certainly works, but it would break should any dev add another li,
    //? or change them to divs. We could target classes, but that'd have risks of their own
    // const wrapper = mount(MainNav);
    // const navLiItems = wrapper.findAll("li"); //Can search for html, css, whatevs
    // expect(navLiItems.length).toEqual(6);

    //? We can add however, an attribute on the li's that exists only so the test can find them
    const wrapper = mount(MainNav);
    const navLiItems = wrapper.findAll("[data-test='main-nav-item']"); //!We are searching for any html attribute using []
    expect(navLiItems.length).toEqual(6);
  });

  describe("User Logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: false,
          };
        },
      });
      const logginButton = wrapper.findComponent({ name: "ActionButton" });
      const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      expect(logginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });

  describe("User logged in", () => {
    it("displays user picture", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const logginButton = wrapper.findComponent({ name: "ActionButton" });
      const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      expect(logginButton.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });
});
