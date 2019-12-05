<template>
  <transition name="grow">
    <div
      class="add-button"
      v-if="!!selected"
      :class="{'bottom-btn': editing.on}"
      :style="{background: gradientColor}"
      @click="toggleEdit"
    >
      <i class="fas fa-plus"></i>
    </div>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["selected", "editing"]),
    // ...mapGetters(["curTodo"]),
    gradientColor() {
      return `linear-gradient(to left top, ${this.selected.todo.colors[0]}, ${
        this.selected.todo.colors[1]
      })`;
    }
  },
  methods: {
    ...mapMutations(["toggleEdit"])
  }
};
</script>

<style lang="scss" scoped>
.add-button {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  & > svg {
    transform: rotate(0);
    transition: all 0.5s ease;
  }
}
.bottom-btn {
  width: 100%;
  right: 0;
  bottom: 0;
  border-radius: 0;
  & > svg {
    transform: rotate(-90deg);
  }
}
.grow-enter,
.grow-leave-to {
  bottom: -50px;
  opacity: 0;
}
.grow-leave,
.grow-enter-to {
  bottom: 45px;
  opacity: 1;
}
.grow-enter-active {
  transition: all 0.2s 0.3s ease;
}

.grow-leave-active {
  transition: all 0.3s ease;
}
</style>