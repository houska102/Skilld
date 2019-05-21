import { shallowMount, createLocalVue } from '@vue/test-utils'
import SkillBundle from '@/components/SkillBundle'
import Skill from "@/components/Skill"

const localVue = createLocalVue()
localVue.component('skill', Skill)

describe('test the SkillBundle component', () => {
  let skillBundle
  beforeEach(() => {
    skillBundle = shallowMount(SkillBundle, {
      localVue,
      propsData: {
        skillBundle: {
          name: 'test Bundle Name',
          skills: [
            {
              id: 1,
              name: 'Actual Running',
              activities: [
                { id: 1, date: '26-1-2019', time: 0.5 },
                { id: 2, date: '30-1-2019', time: 0.5 }
              ]
            },
            {
              id: 2,
              name: 'Training for Running',
              activities: [
                { id: 1, date: '5-2-2019', time: 0.5 }
              ]
            }
          ]
        }
      }
    })
  })

  it('compiles', () => {
    expect(skillBundle).toBeDefined()
  })

  it('calculates total hours correctly', () => {
    expect(skillBundle.vm.totalHoursSpent).toBe(1.5)
  })
})
