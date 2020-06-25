import { mount } from '@vue/test-utils'
import ImageGrid from '@/components/ImageGrid.vue'

describe('ImageGrid.vue', () => {
  it('toggles loading', () => {
    const wrapper = mount(ImageGrid)
    expect(wrapper.vm.loading).toBe(true)
    expect(wrapper.text()).toContain('Loading...')
    wrapper.setData({ loading: false })
    expect(wrapper.vm.loading).toBe(false)
  })
})
