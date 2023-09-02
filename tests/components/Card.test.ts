import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card", () => {
  const id = "test-card";
  const icon = "user";
  const title = "Test Title";

  test("mounts successfully", () => {
    const wrapper = mount(Card, {
      props: { id, icon, title },
    });
    expect(wrapper.exists()).toBe(true);
  });

  test("renders props correctly", () => {
    const icon = "user";
    const title = "Test Title";
    const wrapper = mount(Card, {
      props: { id, icon, title },
    });
    expect(wrapper.find("section").attributes("aria-labelledby")).toBe(
      "test-card-heading",
    );
    expect(wrapper.find("h2").text()).toBe(title);
    expect(wrapper.find("h2").attributes("id")).toBe("test-card-heading");
  });

  test("renders slots correctly", () => {
    const wrapper = mount(Card, {
      props: { id, icon, title },
      slots: {
        default: '<div class="test-slot">Slot Content</div>',
      },
    });
    expect(wrapper.find(".test-slot").text()).toBe("Slot Content");
  });
});
