<template>
  <div id="home">
    <skill-bundle
      v-for="bundle in skillBundles"
      :key="bundle.id"
      :skillBundle="bundle"
    ></skill-bundle>
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
  #home{
    display:flex;
  }
</style>
