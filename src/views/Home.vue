<template>
  <div id="home">
    {{skillBundles}}
  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    skillBundles () {
      return this.$store.getters.skillBundles
    }
  }
}
</script>

<style scoped>
  
</style>
