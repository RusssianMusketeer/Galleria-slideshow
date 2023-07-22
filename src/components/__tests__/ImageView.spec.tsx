import { mount } from "@vue/test-utils";
import ImageViewVue from "../ImageView.vue";
import { describe, it, expect } from "vitest";
import Image from "@/assets/data.json"

describe("ImageView.vue", () => {

  it("should renders is page content is correct", () => {
    const imageName = "Starry night";
    const artistName = "Vincent Van Gogh";
    const wrapper = mount(ImageViewVue, {
      props: { 
        lowerName: Image[0].lowerName,
        artistName: Image[0].artist.name,
        imageName: Image[0].name
      },
    });

    expect(wrapper.text()).toBe('Starry NightVincent Van Gogh')
  })
});