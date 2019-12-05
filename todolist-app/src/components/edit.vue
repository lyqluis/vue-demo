<template>
  <transition name="flowup">
    <div class="edit" v-if="editing.on">
      <app-bar title="New Task" leftIcon="fas fa-times" @leftBtn="toggleEdit(false)" />
      <div class="edit-wrapper">
        <header>What task are you planning to perform?</header>
        <textarea name id cols="30" rows="5" v-model="editing.text" />
        <div class="edit-info">
          <div class="edit_todo">
            <i :class="`fas fa-${selected.todo.icon}`"></i>
            <span>{{selected.todo.name}}</span>
          </div>
          <div class="edit_date">
            <i class="far fa-calendar-alt"></i>
            <span>{{todayDate}}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import AppBar from "./appBar";
import { todayDate } from "../assets/js/util";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    AppBar
  },
  computed: {
    ...mapState(["editing", "selected"]),
    ...mapGetters(["curTodo"]),
    todayDate
  },
  methods: {
    ...mapMutations(["toggleEdit"])
  }
};
</script>

<style lang="scss" scoped>
.edit {
  background: #fff;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  .edit-wrapper {
    padding: 0 7vw;
    & > textarea {
      width: 100%;
      outline: none;
      font-size: 30px;
      margin-top: 10px;
    }
    .edit-info {
      color: #999;
      & > div {
        height: 30px;
        padding: 5px 0;
        font-size: 18px;
      }
      .edit_todo {
        border-bottom: 1px solid #999;
      }
      & i,
      & svg {
        margin: 0 20px 0 2px;
      }
    }
  }
}
.flowup-enter,
.flowup-leave-to {
  top: 100%;
}

.flowup-leave,
.flowup-enter-to {
  top: 0;
}

.flowup-enter-active {
  transition: all 0.5s ease;
}

.flowup-leave-active {
  transition: all 0.5s ease;
}
</style>