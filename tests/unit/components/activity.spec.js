import { shallowMount, createLocalVue } from '@vue/test-utils'
import Activity from "@/components/Activity"

const localVue = createLocalVue()

describe('Skill component test suite', () => {
  let activity
  beforeEach(() => {
    activity = shallowMount(Activity, {
      localVue,
      propsData: {
        activity: { id: 1, date: '26-1-2019', time: 0.5 }
      }
    })
  })

  test('activity component compiles', () => {
    expect(activity).toBeDefined()
  })

  test('activity component compiles', () => {
    expect(activity.element).toMatchSnapshot()
  })

})
