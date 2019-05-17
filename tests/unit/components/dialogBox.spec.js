import { shallowMount } from '@vue/test-utils'
import dialogBox from "@/components/dialogBox"

describe('dialog box test suite', () => {
  let dialogBoxComponent
  beforeEach(() => {
    dialogBoxComponent = shallowMount(dialogBox)
  })

  test('dialogBox mounts correctly', () => {
    expect(dialogBoxComponent).toBeDefined()
  })

  test('open prop is false by default', () => {
    expect(dialogBoxComponent.vm.open).toBe(false)
  })

  test('closeButton emits the close event', () => {
    dialogBoxComponent.find('#closeButton').trigger('click')
    expect(dialogBoxComponent.emitted().close).toBeTruthy()
  })

  test('confirmButton emits the confirm event', () => {
    dialogBoxComponent.find('#confirmButton').trigger('click')
    expect(dialogBoxComponent.emitted().confirm).toBeTruthy()
  })
})
