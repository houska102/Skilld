<template lang="html">
  <div class="skillBundle">
    <div class="bundle-name">{{skillBundle.name}}</div>
    <div class="bundle-total-time">Total Time: {{totalHoursSpent}}h</div>
    <div class="bundle-skills">
      <div class="bundle-skills-heading">Trainings:</div>
      <skill
        v-for="skill in skillBundle.skills"
        :key="skill.id"
        :skill="skill"
        :totalHours="totalHoursSpent"
      ></skill>
    </div>
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
  .skillBundle {
    width:300px;
    padding:10px;
    margin: 20px;
    -webkit-box-shadow: 3px 4px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 4px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 3px 4px 5px 0px rgba(0,0,0,0.75);
  }
  .bundle-name {
    font-size: 20px;
    border-bottom: 2px solid lightgrey;
    margin-bottom: 10px;
  }
  .bundle-total-time {
    text-align: left;
  }
  .bundle-skills {
    margin: 10px 0;
  }
  .bundle-skills-heading {
    font-size: 18px;
    text-align: left;
  }
</style>
