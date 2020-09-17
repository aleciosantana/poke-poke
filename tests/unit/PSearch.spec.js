import { createLocalVue, shallowMount } from '@vue/test-utils'
import PSearch from '@/components/PSearch.vue'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PSearch.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      loadCards: jest.fn()
    }
    store = new Vuex.Store({ actions })
  })

  it('should call action loadCards when searching', () => {
    const wrapper = shallowMount(PSearch, { localVue, store })

    const input = wrapper.find('.input__search')

    input.element.value = 'pikachu'
    input.trigger('search')

    expect(actions.loadCards).toBeCalledWith(expect.anything(), 'pikachu')
  })
})
