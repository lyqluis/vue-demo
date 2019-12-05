<template>
  <div class="home">
    <appbar title="TODO LIST" leftIcon="fas fa-bars" rightIcon="searchs" />
    <user />
    <background />
    <todolist />
    <todo-detail />
    <edit />
    <add-button />
  </div>
</template>

<script>
import Appbar from "@/components/appBar";
import User from "@/components/user";
import Background from "@/components/background";
import Todolist from "@/components/todolist";
import TodoDetail from "@/components/todoDetail";
import Edit from "@/components/edit";
import AddButton from '@/components/addButton';

export default {
  name: "home",
  components: {
    Appbar,
    User,
    Background,
    Todolist,
    TodoDetail,
    Edit,
    AddButton
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  .app-bar{
    color: #fff;
  }
}
</style>
