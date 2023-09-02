import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card", () => {
  test("mounts successfully", () => {
    const wrapper = mount(Card, {
      props: {
        icon: "user",
        title: "Test Title",
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  test("renders props correctly", () => {
    const icon = "user";
    const title = "Test Title";
    const wrapper = mount(Card, {
      props: { icon, title },
    });
    expect(wrapper.find("h2").text()).toBe(title);
  });

  test("renders slots correctly", () => {
    const wrapper = mount(Card, {
      props: {
        icon: "user",
        title: "Test Title",
      },
      slots: {
        default: '<div class="test-slot">Slot Content</div>',
      },
    });
    expect(wrapper.find(".test-slot").text()).toBe("Slot Content");
  });
});
