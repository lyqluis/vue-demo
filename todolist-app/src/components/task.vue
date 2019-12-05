<template>
  <div class="task">
    <input :id="index" type="checkbox" v-model="task.done" />
    <label :for="index">
      <span class="checkbox">
        <i :class="finished" />
      </span>
      <span>{{task.title}}</span>
    </label>
    <span class="delete" @click="$emit('deleteTask')">
      <i class="far fa-trash-alt" />
    </span>
  </div>
</template>

<script>
let id = 1;

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      index: `task${id++}` // 直接用task.id收起动画会有bug
    };
  },
  computed: {
    finished() {
      return this.task.done ? "fas fa-check" : "";
    }
  }
};
</script>

<style lang="scss">
.task {
  display: flex;
  position: relative;
  align-items: center;
  & input {
    display: none;
  }
  & > label,
  & > span {
    display: flex;
    flex: 0 0 auto;
  }
  label {
    line-height: 19px;
    vertical-align: middle;
  }
  .checkbox {
    display: flex;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    border-radius: 2px;
    background: #fff;
    margin-right: 20px;
    // & i,
    // & svg{
    //   display: none;
    // }
  }
  & input:checked + .checkbox i {
    display: inline-block;
  }
  .delete {
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 2px 3px;
    line-height: 20px;
    position: absolute;
    right: 0;
    &:active {
      color: red;
    }
  }
}
</style>