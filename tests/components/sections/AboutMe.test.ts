import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AboutMe from "@/components/sections/AboutMe.vue";

describe("AboutMe", () => {
  test("mounts successfully", () => {
    const wrapper = mount(AboutMe);
    expect(wrapper.exists()).toBe(true);
  });

  test("renders profile image correctly", () => {
    const wrapper = mount(AboutMe);
    const profileImg = wrapper.find("img[alt='Profile image']");
    expect(profileImg.exists()).toBe(true);
  });

  test("renders social media links correctly", () => {
    const wrapper = mount(AboutMe);
    const githubLink = wrapper.find(`[to='https://github.com/swan14gg']`);
    const xLink = wrapper.find(`[to='https://x.com/swan14gg']`);
    const zennLink = wrapper.find(`[to='https://zenn.dev/swan14gg']`);

    expect(githubLink.exists()).toBe(true);
    expect(xLink.exists()).toBe(true);
    expect(zennLink.exists()).toBe(true);
  });
});
