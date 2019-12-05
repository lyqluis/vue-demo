<template>
  <transition name="show" @enter="showEnter" @leave="showLeave">
    <div class="todo-detail" v-if="selected">
      <appbar title="Tasks" leftIcon="fas fa-chevron-left" @leftBtn="unselectTodo" />
      <todo :todo="selected.todo" :todoIndex="selected.todoIndex" :selected="false" />
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Appbar from "./appBar";
import Todo from "./todo";

export default {
  components: {
    Appbar,
    Todo
  },
  computed: {
    ...mapState(["selected", "unselect"])
  },
  methods: {
    ...mapMutations(["unselectTodo"]),
    showEnter(el) {
      let rect = this.selected.rect;
      Object.assign(el.style, {
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`
      });
      setTimeout(() => {
        Object.assign(el.style, {
          top: 0,
          left: 0,
          width: `${rect.appWidth}px`,
          height: `${rect.appHeight}px`
        });
      });
    },
    showLeave(el) {
      let rect = this.unselect.rect;
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${rect.appWidth}px`,
        height: `${rect.appHeight}px`
      });
      setTimeout(() => {
        Object.assign(el.style, {
          top: `${rect.top}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`
        });
      });
    }
  }
};
</script>

<style lang="scss">
.todo-detail {
  background: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  .todo {
    margin: 0;
    padding: 7vw;
    height: calc(100% - 50px);
    width: 100%;
    box-shadow: none;
    .todo_body {
      .todo_tasks {
        opacity: 1;
        transform: scaleY(1);
      }
    }
  }
}
.show-enter-to,
.show-leave {
  border-radius: 0;
  .app-bar {
    display: flex;
  }
  .todo {
    .todo_body {
      display: block;
      .todo_tasks {
        opacity: 1;
      }
    }
  }
}
.show-enter,
.show-leave-to {
  border-radius: 8px;
  .app-bar {
    display: none;
  }
  .todo {
    padding: 4vw;
    .todo_body {
      transform: translateY(20vh);
      .todo_tasks {
        opacity: 0;
      }
    }
  }
}
.show-enter-active,
.show-leave-active {
  transition: all 0.5s ease;
  .todo,
  .todo_head,
  .todo_body,
  .todo_progress,
  .todo_tasks,
  .app-bar {
    transition: all 0.5s ease;
  }
}
</style>