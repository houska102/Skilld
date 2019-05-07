<template lang="html">
  <div class="skill">
    <div class="skill-name">
      {{skill.name}}
    </div>
    <div :style="precentageStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object
    },
    totalHours: {
      type: Number
    }
  },
  computed: {
    totalHoursSpent () {
      return this.skill.activities.reduce((acc, activity) => {
        acc += activity.time
        return acc
      }, 0)
    },
    precentageOfTotalTime () {
      return Math.round((this.totalHoursSpent / this.totalHours) * 100)
    },
    precentageStyle () {
      return {
        width: this.precentageOfTotalTime + '%',
        height: '2px',
        background: 'red'
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .skill {
    background:#fafafa;
    text-align: left;
  }
  .skill-name {
    padding:5px;
  }
  .skill:not(:last-child) {
    border-bottom:1px solid #f0f0f0

  }
</style>
