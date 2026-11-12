import { defaultPlugins, mount } from '@opencloud-eu/web-test-helpers'
import HelloView from '../../src/views/HelloView.vue'

describe('Skeleton app', () => {
  it('renders the hello view', () => {
    const wrapper = mount(HelloView, { global: { plugins: [...defaultPlugins()] } })
    expect(wrapper.find('h1').text()).toBe('Hello developer!')
  })
})
