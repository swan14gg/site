import { describe, test, expect } from "vitest";

import { mount } from "@vue/test-utils";
import LinksCard from "@/components/LinksCard.vue";
import unknown from "@/assets/img/unknown.png";

describe("LinksCard", () => {
  const props = {
    id: "test-id",
    icon: "some-icon",

    title: "Test Title",
    pages: [
      {
        icon: "./favicon.ico",
        title: "Page1",
        link: "/page1",
        githubLink: "https://github.com/page1",
      },
      {
        icon: "./favicon.ico",
        title: "Page2",
        link: "/page2",
      },
      {
        title: "Page3",
        link: "/page3",
      },
    ],
  };

  test("mounts successfully", () => {
    const wrapper = mount(LinksCard, {
      props,
    });
    expect(wrapper.exists()).toBe(true);
  });

  test("renders props correctly", () => {
    const wrapper = mount(LinksCard, {
      props,
    });
    expect(wrapper.find("ul").exists()).toBe(true);
    expect(wrapper.findAll("li").length).toBe(3);
  });

  test("renders icon correctly", () => {
    const wrapper = mount(LinksCard, {
      props,
    });
    expect(wrapper.findAll("img[src='./favicon.ico']")).toHaveLength(2);
    expect(wrapper.findAll(`img[src='${unknown}']`)).toHaveLength(1);
  });

  test("renders links correctly", () => {
    const wrapper = mount(LinksCard, {
      props,
    });
    wrapper.findAll(".link").forEach((link, index) => {
      expect(link.text()).toBe(props.pages[index].title);
    });
  });

  test("renders GitHub icon correctly", () => {
    const wrapper = mount(LinksCard, {
      props,
    });
    expect(wrapper.findAll("img[alt='GitHub Icon']")).toHaveLength(1);
  });
});
