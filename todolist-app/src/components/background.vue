<template>
  <div class="background">
    <div
      class="background_color"
      v-for="(todo, index) in todos"
      :key="todo.name"
      :class="{ background_active: index === curIndex }"
      :style="{ background: gradientColor(todo.colors) }"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["todos", "curIndex"])
  },
  methods: {
    gradientColor(colors) {
      return `linear-gradient(to top, ${colors[0]}, ${colors[1]})`;
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  .background_color {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .background_active {
    opacity: 1;
  }
}
</style>