<template lang="html">
  <div class="skillBundle">
    {{skillBundle.name}} {{totalHoursSpent}}
  </div>
</template>

<script>
export default {
  props: {
    skillBundle: {
      type: Object
    }
  },
  computed: {
    totalHoursSpent () {
      console.log(this.skillBundle)
      return this.skillBundle.skills.reduce((acc, skill) => {
        skill.activities.forEach((activity) => {
          acc += activity.time
        })
        return acc
      }, 0)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
