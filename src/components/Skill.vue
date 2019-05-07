<template lang="html">
  <div class="skill">
    <div class="skill-heading">
      <span>{{skill.name}}</span><span>total: {{totalHoursSpent}}h <button @click="showActivities = !showActivities">\/</button></span>
    </div>
    <div :style="precentageStyle"></div>
    <div v-show="showActivities" class="skill-activities">
      <activity
        v-for="activity in skill.activities"
        :key="activity.date"
        :activity="activity"
      ></activity>
    </div>
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
  data () {
    return {
      showActivities: false
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
  .skill-heading {
    padding:5px;
    display:flex;
    justify-content: space-between;
  }
  .skill:not(:last-child) {
    border-bottom:1px solid #f0f0f0

  }
  .skill-activities {
    transition: all 0.5s;
  }
</style>
