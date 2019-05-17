import { shallowMount } from '@vue/test-utils'
import Skill from "@/components/Skill"

describe('Skill component test suite', () => {
  let skill
  beforeEach(() => {
    skill = shallowMount(Skill, {
      propsData: {
        totalHours: 4,
        skill: {
          id: 1,
          name: 'testSkill',
          activities:[
            { id: 1, date: '26-1-2019', time: 0.5 },
            { id: 2, date: '27-1-2019', time: 0.5 }
          ]
        }
      }
    })
  })

  test('dialogBox mounts correctly', () => {
    expect(skill).toBeDefined()
  })

  test('total hours spent on a skill calculates correctly', () => {
    expect(skill.vm.totalHoursSpent).toBe(1)
  })

  test('precentage of total time spent on all skills(totalHours prop) calculates correctly', () => {
    expect(skill.vm.precentageOfTotalTime).toBe(25)
  })

  test('precentage bar style is correct', () => {
    expect(skill.vm.precentageStyle).toMatchObject({
      width: '25%',
      height: '2px',
      background: 'red'
    })
  })

})
