import TimeTracker from './TimeTracker.vue'

import { mount } from '@vue/test-utils'


test('Tester le contenu de la div apres 15 seconde', () => {

    const wrapper = mount(TimeTracker, {
        propsData : {
            time : 85,
            direction : "up"
        }
    })

    expect(wrapper.find('[data-test = "time"]').text()).toBe("00:00")
})