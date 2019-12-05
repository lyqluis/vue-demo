<template>
  <div class="todo" :class="{todo_selected: selected}" @click="handleClick">
    <div class="todo_head">
      <div class="todo_icon" :style="{color: `${todo.colors[0]}`, border: `1px solid ${todo.colors[0]}`}">
        <i :class='`fas fa-${todo.icon} fa-lg`'></i>
      </div>
    </div>
    <div class="todo_body">
      <div class="todo_body_info">
        <p class="todo_tips">{{todo.tasks.length}} Tasks</p>
        <p class="todo_title">{{todo.name}}</p>
        <div class="todo_progress">
          <span class="progress_line">
            <i class="progress_inline" :style="{background: progressColor, width: progress}"></i>
          </span>
          <span class="progress_num">{{progress}}</span>
        </div>
      </div>
      <div class="todo_tasks">
        <ul>
          <div class="todo_subtitle" v-if="todayTasks.length">Today</div>
          <li v-for="(task, i) in todayTasks" :key="i">
            <task :task="task" @deleteTask="deleteTask({todoIndex: todoIndex, taskId: task.id})" />
          </li>
        </ul>
        <ul>
          <div class="todo_subtitle" v-if="tomorrowTasks.length">Tomorrow</div>
          <li v-for="(task, i) in tomorrowTasks" :key="i">
            <task :task="task" @deleteTask="deleteTask({todoIndex: todoIndex, taskId: task.id})" />
          </li>
        </ul>
        <ul>
          <div class="todo_subtitle" v-if="outdatedTasks.length">Outdated</div>
          <li v-for="(task, i) in outdatedTasks" :key="i">
            <task :task="task" @deleteTask="deleteTask({todoIndex: todoIndex, taskId: task.id})" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { today, tomorrow } from "@/assets/js/util.js";
import Task from "./task";
import { mapMutations } from "vuex";

export default {
  components: { Task },
  props: {
    todo: {
      type: Object,
      required: true
    },
    todoIndex: Number,
    selected: Boolean
  },
  computed: {
    todayTasks() {
      return this.todo.tasks.filter(
        task => task.date >= today && task.date < tomorrow
      );
    },
    tomorrowTasks() {
      return this.todo.tasks.filter(task => task.date >= tomorrow);
    },
    outdatedTasks() {
      return this.todo.tasks.filter(task => task.date < today);
    },
    progress() {
      let total = this.todo.tasks.length;
      let finished = this.todo.tasks.filter(task => task.done).length;
      return total ? Math.round((finished / total) * 100) + "%" : 0 + "%";
    },
    progressColor() {
      return `linear-gradient(to right, ${this.todo.colors[0]}, ${
        this.todo.colors[1]
      })`;
    }
  },
  methods: {
    ...mapMutations(["deleteTask"]),
    handleClick() {
      const todo = this.todo;
      const todoIndex = this.todoIndex;
      const appRect = document.querySelector("#app").getBoundingClientRect();
      const elRect = this.$el.getBoundingClientRect();
      const rect = {};
      rect.top = elRect.top - appRect.top;
      rect.left = elRect.left - appRect.left;
      rect.width = elRect.width;
      rect.height = elRect.height;
      rect.appWidth = appRect.width;
      rect.appHeight = appRect.height;
      this.$emit("select", { rect, todo, todoIndex });
    }
  }
};
</script>

<style lang="scss">
.todo {
  width: 80vw;
  height: 95%;
  flex: 0 0 auto;
  margin: 0 3vw;
  // overflow: hidden;
  overflow: auto;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #666;
  padding: 4vw;
  .todo_head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .todo_icon {
      width: 40px;
      height: 40px;
      margin-bottom: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .todo_body {
    // overflow: scroll;
    .todo_tips {
      font-size: 16px;
      font-weight: 600;
    }
    .todo_title {
      margin-top: 5px;
      font-size: 32px;
    }
    .todo_progress {
      display: flex;
      align-items: center;
      .progress_line {
        flex: 1 0 auto;
        height: 3px;
        background: #eee;
        margin-right: 15px;
        .progress_inline {
          display: block;
          height: 100%;
          transition: all 0.2s ease;
        }
      }
    }
    .todo_tasks {
      overflow: auto;
      .todo_subtitle {
        font-weight: 600;
        margin: 20px 0;
      }
      & > ul {
        margin: 20px 0;
        li {
          height: 60px;
          padding: 20px 0;
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
}
.todo_selected {
  visibility: hidden;
}
</style>