<template>
  <div id="app">
    <dialog-box
      :open="addBundleDialog"
      @close="addBundleDialog = false"
      @confirm="addBundle"
    >
      name:<input type="text" v-model="bundleName">
    </dialog-box>
    <div id="nav">
      <div class="nav-item" id="menu">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-item" id="actions">
        <button @click="onAddBundleOpen">+</button>
      </div>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addBundleDialog: false,
      bundleName: ''
    }
  },
  methods: {
    onAddBundleOpen () {
      this.addBundleDialog = true
    },
    addBundle () {
      this.$store.dispatch('addBundle', {name: this.bundleName})
      this.addBundleDialog = false
    }
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  position: fixed;
  top:0;
  left:0;
  width:100vw;
  height:40px;
  background:#696969;
  display:flex;
  flex-direction: row;
  flex-wrap:nowrap;
  justify-content:space-between;
}
#nav div a {
  box-sizing: border-box;
  background:rgba(0,0,0,0.3);
  border-radius: 10px;
  height:30px;
  padding:5px 15px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
#nav div a:hover {
  background:rgba(255,255,255,0.3);
}

#nav #menu{
  align-items: center;
  padding-left: 10px
}

#nav #actions{
  align-items: center;
  padding-right: 10px
}

#nav #actions button{
  width:30px;
  height:30px;
  border-radius:15px;
  background:rgba(0,0,0,0.3);
  border:none;
  color:white;
  font-size: 25px;
}
#nav #actions button:hover{
  background:rgba(255,255,255,0.3)
}

#content {
  padding-top:50px;
}

.nav-item {
  display:flex;
}
</style>
