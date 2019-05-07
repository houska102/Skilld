<template lang="html">
  <div class="skill">
    {{skill.name}}
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object
    }
  }
}
</script>

<style lang="css" scoped>
</style>
