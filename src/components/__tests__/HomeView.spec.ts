import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ImageViewVue from '../ImageView.vue'
import Images from "@/assets/data.json"

describe('ImageGridView', () => {
  it('renders images and text with the props given', () => {
    const wrapper = mount(ImageViewVue, {
      propsData : {
        image: Images[0].images.gallery,
        artistName: Images[0].artist.name,
        imageName: Images[0].name
      }
    })
    expect(wrapper.props('imageName')).toBe('Starry Night')
    expect(wrapper.props('artistName')).toBe('Vincent Van Gogh')

  })
})
