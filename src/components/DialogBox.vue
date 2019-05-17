<template>
  <div
    v-show="open"
    style="width: 100vw; height: 100vh; position:fixed;top:0;left:0; z-index: 2; background:rgba(0,0,0,0.5)"
    @click.self="$emit('close')"
  >
    <div style="display:inline-block;margin: 0 auto;padding: 10px; background: white;margin-top:5%;overflow:stretch">
      <slot></slot>
      <div>
        <button id="closeButton" @click="$emit('close')">close</button>
        <button id="confirmButton" @click="$emit('confirm')">confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>
