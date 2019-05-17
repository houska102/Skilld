<template lang="html">
  <div class="activity">
    <span>{{activity.date}}</span><span>{{activity.time}}h</span>
  </div>
</template>

<script>
export default {
  name: 'activity',
  props: {
    activity: {
      type: Object
    }
  }
}
</script>

<style lang="css" scoped>
.activity{
  padding:5px;
  display:flex;
  justify-content: space-between;
}
</style>
