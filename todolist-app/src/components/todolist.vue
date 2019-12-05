<template>
  <div class="todolist" :class="{todolist_selected: !!selected}">
    <ul :style="{width: `${todos.length * 100}%`}">
      <li
        v-for="(todo,i) in todos"
        :key="todo.name"
        :style="{transform: `translateX(-${curIndex * 100}%)`}"
      >
        <todo :todo="todo" :todoIndex='i' :selected="selected && todo === selected.todo" @select="selectTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Todo from "./todo.vue";

export default {
  components: {
    Todo
  },
  mounted() {
    // 控制手势划动操作
    let touch = {};
    this.$el.addEventListener("touchstart", e => {
      touch.startX = e.touches[0].clientX;
      touch.startY = e.touches[0].clientY;
      touch.endX = 0;
      touch.endY = 0;
    });
    this.$el.addEventListener("touchmove", e => {
      touch.endX = e.touches[0].clientX;
      touch.endY = e.touches[0].clientY;
    });
    this.$el.addEventListener("touchend", e => {
      if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) return;
      if (Math.abs(touch.endY - touch.startY) > 50) return;
      if (touch.endX < touch.startX) {
        // 选中下一个todo
        this.nextTodo();
      } else {
        // 选中上一个todo
        this.preTodo();
      }
    });
  },
  computed: {
    ...mapState(["todos", "curIndex", "selected"])
  },
  methods: {
    ...mapMutations(["nextTodo", "preTodo", "selectTodo"])
  }
};
</script>

<style lang="scss">
.todolist {
  height: 50vh;
  padding: 0 7vw;
  transition: all 0.2s ease;
  overflow: hidden;
  & > ul {
    height: 100%;
    display: flex;
    & > li {
      flex: 0 0 auto;
      height: 100%;
      transition: transform 0.5s ease;
      & > .todo {
        overflow: hidden;
        border-radius: 8px;
        background-color: white;
        .todo_body {
          // overflow: hidden;
          transform: translateY(20vh);
        }
        .todo_tasks {
          opacity: 0;
        }
      }
    }
  }
}
.todolist_selected {
  // 点击的时候把旁边的todo挤开的效果
  transform: scaleX(1.25);
}
</style>