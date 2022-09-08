import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  test("If API data Loads on DOM", () => {
    const wrapper = mount(Home);
    expect(wrapper.classes()).toContain("container");
  });
});
